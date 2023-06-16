import { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';

export function useUrl() {
  const context = useContext(UrlContext);
  return context;
}
