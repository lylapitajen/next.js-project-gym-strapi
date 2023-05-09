'use strict';

/**
 * head-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::head-office.head-office');
