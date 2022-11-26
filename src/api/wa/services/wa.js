'use strict';

/**
 * wa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wa.wa');
