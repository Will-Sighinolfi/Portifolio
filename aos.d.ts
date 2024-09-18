declare module 'aos' {
    interface AosOptions {
      duration?: number;
      delay?: number;
      once?: boolean;
      easing?: string;
    }
  
    interface Aos {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const aos: Aos;
    export default aos;
  }
  