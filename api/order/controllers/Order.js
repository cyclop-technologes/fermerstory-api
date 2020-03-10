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
      const products = entry.products.map(el => `<p>${el.product.name} – ${el.quantity}шт.</p>`)
      await strapi.plugins['email'].services.email.send({
        to: entry.email,
        from: 'info@ferm.store',
        subject: 'Заказ #' + entry.id.slice(18).toUpperCase(),
        html: `
          <h3>Ваш заказ #${entry.id.slice(18).toUpperCase()} уже собирается.</h3>
          ${products.join()}
        `,
      });
    }

     return sanitizeEntity(entry, { model: strapi.models.order });
   },
 };
