export default defineAppConfig({
    ui: {
        primary: "green",
        secondary: 'grey',
        warning: 'orange',
        danger: 'red',
        gray: "cool",
    },
    button: {
        default: {
            color: "orange",
        },
    },
    card: {
        default: {
            ui: {
                body: {
                    padding: "px-2 py-3 sm:p-4"
                },
            }
        }
    },
    colorMode: {
        preference: "light",
    },
    container: {
        constrained: "max-w-5xl",
    },
});
