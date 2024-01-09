module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'expo-router/babel',
            [
                'module-resolver',
                {
                    extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
                    root: ['.'],
                    alias: {
                        "components/*": ["./components/*"],
                        "navigation/*": ["./navigation/*"],
                        "screens/*": ["./screens/*"],
                        "stores/*": ["./stores/*"],
                        "types/*": ["./types/*"],
                        "utils/*": ["utils/*"]
                    }
                }
            ]
        ],
    }
}
