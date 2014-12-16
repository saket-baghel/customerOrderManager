//This handles retrieving data and is used by controllers
app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.insertCustomer = function (firstName, lastName, city, ordersProduct, ordersPrice, ordersQuantity, ordersOrderTotal) {
        var topID = customers.length + 1;
        var order = {};
        order.product = ordersProduct;
        order.price = ordersPrice;
        order.quantity = ordersQuantity;
        order.orderTotal = ordersOrderTotal;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city,
            orders:[order]
        });
        //customers.orders.push(order);
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    var customers = [
        {
            id: 1, firstName: 'Amit', lastName: 'Gadaley', address: '1234 Anywhere', city: 'Indore',
            orders: [
                { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
                { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
                { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
            ]
        },
        {
            id: 2, firstName: 'Anuj', lastName: 'Jain', address: 'Anu colony', city: 'Badnawar',
            orders: [
                { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
                { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
                { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
            ]
        },
        {
            id: 3, firstName: 'Hriday', lastName: 'Jain', address: '455 7th Ave.', city: 'Maheshwar',
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        },
        {
            id: 4, firstName: 'Keshav', lastName: 'Atal', address: 'ABC apt.', city: 'Indore',
            orders: [
                { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
                { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 5, firstName: 'Mahak', lastName: 'Garg', address: '123 apt', city: 'Indore',
            orders: [
                 { product: 'iPod', price: 399.99, quantity: 1, orderTotal: 399.99 }
                     ]
        },
        {
            id: 6, firstName: 'Neeraj', lastName: 'Sharma', address: '563 New apt', city: 'Indore',
            orders: [
                { product: 'Speakers', price: 499.99, quantity: 1, orderTotal: 499.99 },
                { product: 'iPod', price: 399.99, quantity: 1, orderTotal: 399.99 }
            ]
        },
        {
            id: 7, firstName: 'Pawan', lastName: 'Verma', address: '256 Main St.', city: 'Indore',
            orders: [
                { product: 'Statue', price: 429.99, quantity: 1, orderTotal: 429.99 },
                { product: 'Picture', price: 1029.99, quantity: 1, orderTotal: 1029.99 }
            ]
        },
        {
            id: 8, firstName: 'Saket', lastName: 'Baghel', address: '177 Main', city: 'Lahar',
            orders: [
                { product: 'Book: AngularJS Development', price: 39.99, quantity: 1, orderTotal: 39.99 },
                { product: 'Book: Basket Weaving Made Simple', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        }
    ];

});