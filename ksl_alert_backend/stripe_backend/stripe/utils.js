module.exports = {
    /**
     * Process in Stripe API Frontend payments
     *
     * @param {object} res - HTTP request response object.
     * @return {callback} Function handling the HTTP request acordingly with the Stripe API response
     */
    postStripeCharge(res) {
      return (stripeErr, stripeRes) => {
        if (stripeErr) {
          console.log({ STRIPE: { errorMessage: stripeErr } });
          res.status(500).send({ Error: stripeErr });
        } else {
          console.log('STRIPE: Payment procesed');
          res.status(200).send({ Success: stripeRes });
        }
      };
    },
  };