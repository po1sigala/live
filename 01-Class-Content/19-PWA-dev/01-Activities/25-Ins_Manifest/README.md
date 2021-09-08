# Instructor Demo: Manifest

In order to turn your application into a proper Progressive Web Application (PWA), you need to have a `manifest.json` file for your application. The `manifest.json` file let's us define basic metadata for our application, which is used to tell your application how to work when installed. 

    * 🔑 A `manifest.json` file can have a multitude of different properties, such as:

        * Icons 

        * Page title

        * Description

        * Themes 

        * Starting URL

Open the `manifest.json` file, do the following:

    * 🔑 The first property we see is `icons` which allows us to define multiple different sizes of our logo. These icons are used once the application is installed.

        ```json
        "icons": [
            {
            "src": "/assets/icons/icon_512x512.png",
            "sizes": "512x512",
            "type": "image/png"
            },
            {
            "src": "/assets/icons/icon_384x384.png",
            "sizes": "384x384",
            "type": "image/png"
            },
            {
            "src": "/assets/icons/icon_256x256.png",
            "sizes": "256x256",
            "type": "image/png"
            },
            {
            "src": "/assets/icons/icon_192x192.png",
            "sizes": "192x192",
            "type": "image/png"
            },
            {
            "src": "/assets/icons/icon_128x128.png",
            "sizes": "128x128",
            "type": "image/png"
            },
            {
            "src": "/assets/icons/icon_96x96.png",
            "sizes": "96x96",
            "type": "image/png"
            }
        ],
        ```

    * 🔑 The next two properties are the `name` and `short_name` which do exactly what there name suggests.

        ```json
        "name": "TODOs",
        "short_name": "TODOs",
        ```

    * 🔑 The`orientation` allows us to define which angle our application is viewed in, while the  `display` property allows us to define preferred display mode.

        ```json
        "orientation": "portrait",
        "display": "standalone",
        ```

    * 🔑 Next, we define the where we want our applications starting URL.

        ```json
        "start_url": "/",
        ```

    * 🔑 Finally, we give our application a description and some styling for the boarders of our application.

        ```json
        "description": "Keep track of important tasks!",
        "background_color": "#7eb4e2",
        "theme_color": "#7eb4e2"
        ```

Once we implement a `manifest.json` file for our TODOs application, we should see a download button in our web address bar.