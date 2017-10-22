"use strict";

const TiVoConstants = {
    ResponseType: {
        CH_STATUS: "CH_STATUS",
        CH_FAILED: "CH_FAILED",
        LIVETV_READY: "LIVETV_READY",
        MISSING_TELEPORT_NAME: "MISSING_TELEPORT_NAME",
    },
    ChannelStatusReason: {
        LOCAL: "LOCAL",
        REMOTE: "REMOTE",
        RECORDING: "RECORDING",
    },
    ChannelSetFailureReason: {
        NO_LIVE: "NO_LIVE",
        MISSING_CHANNEL: "MISSING_CHANNEL",
        MALFORMED_CHANNEL: "MALFORMED_CHANNEL",
        INVALID_CHANNEL: "INVALID_CHANNEL",
    },
};

module.exports = TiVoConstants;
