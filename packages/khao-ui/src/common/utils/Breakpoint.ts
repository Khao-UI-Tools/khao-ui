class Breakpoint {
  tablet = 1024;
  phone = 620;

  isTablet = (): boolean => {
    return this.isEqualOrSmaller(this.tablet);
  };

  isPhone = (): boolean => {
    return this.isEqualOrSmaller(this.phone);
  };

  isEqualOrSmaller = (breakpoint: number): boolean => {
    return window.innerWidth <= breakpoint;
  };
}

export default new Breakpoint();
