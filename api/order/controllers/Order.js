'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

 module.exports = {
   async create(ctx) {
     let entry;
     if (ctx.is('multipart')) {
       const { data, files } = parseMultipartData(ctx);
       entry = await strapi.services.order.create(data, { files });
     } else {
       entry = await strapi.services.order.create(ctx.request.body);
     }

    if (entry.email) {
      const products = entry.products.map(el => `${el.product.name} x${el.quantity}шт.`)
      await strapi.plugins['email'].services.email.send({
        to: entry.email,
        from: 'info@ferm.store',
        subject: 'Закак #' + entry.id.slice(18).toUpperCase(),
        text: `
          Закакз #${entry.id.slice(18).toUpperCase()} уже собирается.
          ${products.join('\n')}
        `,
      });
    }

     return sanitizeEntity(entry, { model: strapi.models.order });
   },
 };
