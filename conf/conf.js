module.exports = {
  api: {
    key: 'cwzh97byqgqb8iyo2s3cme2u3glnyfaq',
    secret: 'pruebas1'
  },
  benchmark: {
    queries: [
      {
        number: 500,
        filters: {
          "locationId": "0-EU-ES-28-07",
          "propertyType": "homes",
          "operation": "sale"
        }
      },
      {
        number: 500,
        filters: {
          locationId: "0-EU-ES-29",
          propertyType: "homes",
          operation: "sale",
          rooms: "2",
          minPrice: "100.000",
          exterior: "true",
          photos: "true"
        }
      }
    ]
  },
  manual: {
    madrid: {
      "locationId": "0-EU-ES-28-07",
      "propertyType": "homes",
      "operation": "sale"
    }
  }
};
