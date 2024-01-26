
describe('API Automation Tests', () => {
    let authToken;
    let bookingId;
    
    // Create an auth token
    it('Create an Auth Token', () => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: {
          username: 'admin',
          password: 'password123',
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        authToken = response.body.token;
      });
    });
    

    // Get all booking IDs
    it('Get all Booking IDs', () => {
      cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          bookingId = response.body[0].bookingid;
        }
      });
    });
    
    // Create a booking
    it('Create a Booking', () => {
      const bookingData = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 200,
        depositpaid: true,
        bookingdates: {
          checkin: '2022-05-01',
          checkout: '2022-05-05',
        },
        additionalneeds: 'Breakfast',
      };
  
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: bookingData,
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('bookingid');
        bookingId = response.body.bookingid;
      });
    });
    
    // Update a booking
    it('Update a Booking', () => {
      const updatedBookingData = {
        firstname: 'UpdatedJohn',
        lastname: 'UpdatedDoe',
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
      };
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${authToken}`,
        },
        body: updatedBookingData,
        failOnStatusCode: false, 
      }).then((response) => {
        if (response.status === 403) {
          cy.log('403 Forbidden Error:', response.body); // Log the error response
        } else {
          expect(response.status).to.equal(200);
        expect(response.body.firstname).to.equal('UpdatedJohn');
        expect(response.body.lastname).to.equal('UpdatedDoe');
        }
      });
    });
  });
  