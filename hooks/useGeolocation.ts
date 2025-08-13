"use client";

import { useState, useEffect } from 'react';
import ILocation from '@/types/interfaces/i-location';

interface GeolocationState {
  location: ILocation | null;
  loading: boolean;
  error: string | null;
}

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

export function useGeolocation(options: GeolocationOptions = {}) {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setState({
        location: null,
        loading: false,
        error: 'Геолокация не поддерживается этим браузером.',
      });
      return;
    }

    // Safari-specific settings for better compatibility
    const defaultOptions: PositionOptions = {
      enableHighAccuracy: false, // Set to false for Safari compatibility
      timeout: 15000, // Increased timeout for Safari
      maximumAge: 600000, // 10 minutes - longer cache for Safari
      ...options,
    };

    const onSuccess = (position: GeolocationPosition) => {
      setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        loading: false,
        error: null,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      let errorMessage = 'Неизвестная ошибка';
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Доступ к геолокации запрещен. Проверьте настройки Safari: Настройки > Safari > Местоположение > Спросить или разрешить для этого сайта.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Информация о местоположении недоступна.';
          break;
        case error.TIMEOUT:
          errorMessage = 'Время ожидания геолокации истекло.';
          break;
        default:
          errorMessage = `Ошибка геолокации: ${error.message}`;
      }

      setState({
        location: null,
        loading: false,
        error: errorMessage,
      });
    };

    // For Safari on iOS, we need to handle the async nature differently
    let timeoutId: NodeJS.Timeout;
    
    try {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, defaultOptions);
      
      // Additional timeout for Safari
      timeoutId = setTimeout(() => {
        setState({
          location: null,
          loading: false,
          error: 'Таймаут геолокации. Убедитесь, что разрешили доступ к местоположению.',
        });
      }, defaultOptions.timeout || 15000);
      
    } catch (err) {
      setState({
        location: null,
        loading: false,
        error: 'Ошибка при запросе геолокации.',
      });
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const refreshLocation = () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    if (!navigator.geolocation) {
      setState({
        location: null,
        loading: false,
        error: 'Геолокация не поддерживается этим браузером.',
      });
      return;
    }

    const refreshOptions: PositionOptions = {
      enableHighAccuracy: true, // Can be true for manual refresh
      timeout: 15000,
      maximumAge: 0, // Always get fresh location
      ...options,
    };
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          loading: false,
          error: null,
        });
      },
      (error) => {
        let errorMessage = 'Неизвестная ошибка';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Доступ к геолокации запрещен. Проверьте настройки Safari.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Информация о местоположении недоступна.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Время ожидания геолокации истекло.';
            break;
          default:
            errorMessage = `Ошибка геолокации: ${error.message}`;
        }

        setState({
          location: null,
          loading: false,
          error: errorMessage,
        });
      },
      refreshOptions
    );
  };

  return {
    ...state,
    refreshLocation,
  };
}

export default useGeolocation;
