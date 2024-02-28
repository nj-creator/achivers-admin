'use strict';

/**
 * academic-calendar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic-calendar.academic-calendar');
