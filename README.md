# NotifyWiz
A clean and easy to use notification package for Javascript projects.

[![PyPI status](https://img.shields.io/pypi/status/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/)

Installation: `npm i notifywiz`

## Examples
```
"use client";
import Notifywiz from 'notifywiz';

export default function TestPage() {
    
    async function clickHandler() {
        Notifywiz.info({ position: 'bottom-right', animation: 'fade', loadingIndicator: true, message: 'This is a notification message', duration: 5000});
        Notifywiz.success({ position: 'bottom-left', animation: 'fade', loadingIndicator: true, message: 'This is a notification message'});
        Notifywiz.error({ position: 'left', animation: 'slide', message: 'This is a notification message'});
        Notifywiz.warning({ position: 'right', animation: 'slide', message: 'This is a notification message', duration: 5000});

    }

    return (
        <div>
            <button onClick={() => clickHandler()}>Notify</button>
        </div>
    )
}
```

## Parameters
```
/**
 * 
 * Show a info notification.
 * @param {string} title - The title of the notification. Defaults to "Type Of Notification" in the implementation.
 * @param {string} message - The message of the notification.
 * @param {Positions} position - The position of the notification.
 * @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
 * @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'slide'.  
 * @param {boolean} loadingIndicator - The loading indicator of the notification. Defaults to false in the implementation.
 * @returns {void}
*/
```

![warn](https://github.com/CB-Website-Development/NotifyWiz/assets/66691438/5d1fc9b5-6b3e-4311-8790-f2aed7a492a5)
![info](https://github.com/CB-Website-Development/NotifyWiz/assets/66691438/c68f6404-bfeb-4554-ab6d-64ec39c5cc0e)
![success](https://github.com/CB-Website-Development/NotifyWiz/assets/66691438/3b3762ef-ed8d-4be0-8a1a-d9661f0b5897)
![error](https://github.com/CB-Website-Development/NotifyWiz/assets/66691438/8a63c81a-b86f-4e9c-a035-6fdc8e8c13ad)

