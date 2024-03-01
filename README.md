# NotifyWiz
A clean and easy to use notification package for Javascript projects.

!!This is still being worked on!!

#Examples
```
"use client";
import Notifywiz from 'notifywiz';

export default function TestPage() {
    
    async function clickHandler() {
        Notifywiz.info({ position: 'bottom-right', animation: 'fade', message: 'This is a notification message'});
        Notifywiz.success({ position: 'bottom-left', animation: 'fade', message: 'This is a notification message'});
        Notifywiz.error({ position: 'left', animation: 'slide', message: 'This is a notification message'});
        Notifywiz.warning({ position: 'right', animation: 'slide', message: 'This is a notification message'});

    }

    return (
        <div>
            <button onClick={() => clickHandler()}>Notify</button>
        </div>
    )
}
```

#Parameters
```
* @param {string} title - The title of the notification. Defaults to "Warning" in the implementation.
* @param {string} message - The message of the notification.
* @param {Positions} position - The position of the notification. Defaults to "bottom-right" in the implementation, ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left').
* @param {number} duration - The duration of the notification. Defaults to 3000 in the implementation.
* @param {animation} animation - The animation of the notification, ('fade', 'slide', 'none') defaults to 'none'.  
```
