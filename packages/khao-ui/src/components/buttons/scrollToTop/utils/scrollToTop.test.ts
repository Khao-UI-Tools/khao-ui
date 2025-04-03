import scrollToTop from './scrollToTop';

describe('scrollToTop', () => {
    it('should scroll to the top of the page', () => {
        const mockScroll = jest.fn();
        Object.defineProperty(window, 'scroll', {
            value: mockScroll,
            writable: true,
            configurable: true,
        });

        scrollToTop();

        expect(mockScroll).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
});
