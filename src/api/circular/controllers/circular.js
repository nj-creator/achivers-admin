'use strict';

/**
 * circular controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::circular.circular');
