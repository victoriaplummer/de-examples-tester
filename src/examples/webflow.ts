import WebflowAPI from "@webflow/designer-extension-typings"

/* Site information and Settings */

export const WF = {

    getSiteInfo: async () => {

        // Get Site Information
        const siteInfo = await webflow.getSiteInfo();

        // Print Site Information
        console.log('Site ID:', siteInfo.siteId);
        console.log('Site Name:', siteInfo.siteName);
    },

    setExtensionSize: async () => {

        // Set the desired size for the extension UI
        const newSize = "large"; // You can change this to "default," "comfortable," or provide { width, height }

        // Set the extension UI size
        await webflow.setExtensionSize(newSize);

        console.log(`Extension UI size set to: ${newSize}`);

    },

    displayCurrentMediaQuery: async () => {
        const breakpointId = await webflow.getMediaQuery();

        switch (breakpointId) {
            case 'xxl':
                console.log("The current view is for very large screens or high-resolution monitors.");
                break;
            case 'xl':
                console.log("The current view is suitable for large desktop monitors.");
                break;
            case 'large':
                console.log("The current view fits standard desktop monitors.");
                break;
            case 'main':
                console.log("The current view is suitable for smaller desktops or large tablets.");
                break;
            case 'medium':
                console.log("The current view is suitable for tablets and some large phones.");
                break;
            case 'small':
                console.log("The current view is designed for larger mobile devices.");
                break;
            case 'tiny':
                console.log("The current view is for the smallest mobile devices.");
                break;
        }
    },

    getIdToken: async () => {

        // Get ID Token
        const idToken = await webflow.getIdToken()

        // Print ID Token
        console.log(idToken)
    },

    /* User Events */

    notifyUser: () => {

        webflow.notify({ type: 'Info', message: 'Great work!' }); // General notification
        webflow.notify({ type: 'Error', message: 'Something went wrong, try again!' }); // Error notification
        webflow.notify({ type: 'Success', message: 'Successfully did something!' }); // Success notification
    },

    subscribeSelect: async () => {

        // Subscribe to changes in the selected element
        const selectedElementCallback = (element: AnyElement | null) => {
            if (element) {
                console.log('Selected Element:', element);
            } else {
                console.log('No element is currently selected.');
            }
        }

        const unsubscribeSelectedElement = webflow.subscribe('selectedelement', selectedElementCallback);
    },

    subscribeBreakpoint: () => {
        /**
     * Subscribe to the 'mediaquery' event and get the Unsubscribe function.
     * This event notifies when the breakpoint changes in the Webflow designer.
     * @param {BreakpointId} breakpoint - The current breakpoint ID ('xxl', 'xl', 'large', 'main', 'medium', 'small', 'tiny').
     */
        const unsubscribeMediaQuery = webflow.subscribe("mediaquery", (breakpoint) => {
            switch (breakpoint) {
                case 'xxl':
                    console.log("The current view is for very large screens or high-resolution monitors.");
                    break;
                case 'xl':
                    console.log("The current view is suitable for large desktop monitors.");
                    break;
                case 'large':
                    console.log("The current view fits standard desktop monitors.");
                    break;
                case 'main':
                    console.log("The current view is suitable for smaller desktops or large tablets.");
                    break;
                case 'medium':
                    console.log("The current view is suitable for tablets and some large phones.");
                    break;
                case 'small':
                    console.log("The current view is designed for larger mobile devices.");
                    break;
                case 'tiny':
                    console.log("The current view is for the smallest mobile devices.");
                    break;
                default:
                    console.log("Unknown breakpoint:", breakpoint);
            }
        });

        /**
         * Later, when you want to unsubscribe from the 'mediaquery' event:
         * @function
         */
        unsubscribeMediaQuery();
    },

    subscribePageChange: () => {

        // Subscribe to changes in the selected page
        const selectedPageCallback = (page: Page | null) => {
            if (page) {
                console.log('Selected Page:', page);
            } else {
                console.log('No element is currently selected.');
            }
        }

        const unsubscribeSelectedElement = webflow.subscribe('currentPage', selectedPageCallback);
    }

}