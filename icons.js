export default class Icons {

    static error =
    `<div class="screenAlert-icon screenAlert-error animate">
        <span class="screenAlert-x-mark">
            <span class="screenAlert-line screenAlert-left animateXLeft"></span>
            <span class="screenAlert-line screenAlert-right animateYLeft"></span>
        </span>
        <div class="screenAlert-placeholder"></div>
        <div class="screenAlert-fix"></div>
    </div>`;

    static success =
    `<div class="screenAlert-icon screenAlert-success animate">
        <span class="screenAlert-line screenAlert-tip animateSuccessTip"></span>
        <span class="screenAlert-line screenAlert-long animateSuccessLong"></span>
        <div class="screenAlert-placeholder"></div>
        <div class="screenAlert-fix"></div>
    </div>`;

    static warn =
    `<div class="screenAlert-icon screenAlert-warning scaleWarning">
        <span class="screenAlert-body pulseWarningIns"></span>
        <span class="screenAlert-dot pulseWarningIns"></span>
    </div>`;

    static info =
    `<div class="screenAlert-icon screenAlert-info scaleInfo">
        <span class="screenAlert-dot pulseInfoIns"></span>
        <span class="screenAlert-body pulseInfoIns"></span>
    </div>`;

} 
