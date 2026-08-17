/// <reference types="vite/client" />

interface Window {
  fbq?: (command: string, eventName: string, ...args: any[]) => void;
}

