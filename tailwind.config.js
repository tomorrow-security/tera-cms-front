module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundImage: theme => ({
            shine: 'linear-gradient(60deg, rgba(255,255,255,0) 40%,rgba(255,255,255,0.2) 42%,rgba(255,255,255,0.6) 47%,rgba(255,255,255,0.8) 50%,rgba(255,255,255,0.6) 53%,rgba(255,255,255,0.2) 58%,rgba(255,255,255,0) 60%,rgba(255,255,255,0) 100%)',
            carousel : 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
        }),
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            'big-cover': '200%',
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            monday: '5px 5px 56px 0px rgba(0, 0, 0, 0.25)',
            toggle: '0 10px 20px -8px rgba(4, 2, 29, 0.25)',
        },
        flex: {
            0: '1 1 0',
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-60': '-60deg',
            '-45': '-45deg',
            0: '0',
            45: '45deg',
            90: '90deg',
            60: '60deg',
            135: '135deg',
            180: '180deg',
            270: '270deg',
        },
        scale: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
        },
        extend: {
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                shine: 'shine 1.3s infinite',
                scroll: 'scroll 40s linear infinite',
            },
            colors: {
                'tc-blue': '#04021D',
                'tc-red': '#E03300',
                'tc-blue-light': 'rgba(4, 2, 29, 0.3)',
                'tc-red-light': 'rgba(224, 51, 0, 0.3)',
            },
            inset: {
                '1/8': '12.5%',
                '2/8': '25%',
                '3/8': '37.5%',
                '4/8': '50%',
                '5/8': '62.5%',
                '6/8': '75%',
                '7/8': '87.5%',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shine: {
                    '0%': { backgroundPosition: '-100%;' },
                    '100%': { backgroundPosition: '100%' },
                },
                scroll: {
                    '0%' : { transform: 'translateX(0)'},
                    '100%': { transform: 'translateX(calc(-200px * 6.24))' },
                },
            },
            transitionDelay: {
                50: '50ms',
                400: '400ms',
                600: '600ms',
                800: '800ms',
                'external-link': 'calc((var(--n) - 1) * 0.1s)'
            },
            transitionTimingFunction: {
                ease: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                toggle: 'cubic-bezier(0.18, 0.89, 0.35, 1.15)',
            },
            translate: {
                'full-50': '150%',
            },
            width: {
                '1/8': '12.5%',
                '2/8': '25%',
                '3/8': '37.5%',
                '4/8': '50%',
                '5/8': '62.5%',
                '6/8': '75%',
                '7/8': '87.5%',
                'carousel': 'calc(200px * 12)',
                '200px': '200px',
            },
        },
    },
    variants: {
        extend: {
            animation: ['group-hover','hover', 'focus', 'checked'],
            backgroundColor: ['group-hover', 'checked', 'active'],
            backgroundImage: ['group-hover', 'hover'],
            borderColor: ['checked', 'active'],
            borderOpacity: ['disabled'],
            fontWeight: ['hover'],
            fontSize: ['hover'],
            fontStyle: ['hover', 'focus'],
            inset: ['group-hover', 'hover'],
            opacity: ['disabled'],
            scale:['group-hover'],
            textOpacity: ['disabled'],
            textColor: ['visited'],
            textDecoration: ['hover', 'focus', 'visited'],
            transform: ['group-hover', 'hover', 'focus', 'checked'],
            transformOrigin: ['group-hover', 'hover', 'focus', 'checked'],
            transitionDelay: ['group-hover', 'hover', 'focus', 'checked'],
            transitionDuration: ['group-hover', 'hover', 'focus', 'checked'],
            transitionProperty: ['group-hover', 'hover', 'focus', 'checked'],
            transitionTimingFunction: ['group-hover', 'hover', 'focus', 'checked'],
            translate: ['group-hover', 'checked'],
        },
    },
    plugins: [],
}