function fill(){
  var seeder = require('mongoose-seed')
  var data = [
    {
        model: 'Company',
        documents: [
            {
                _id: '596634c0b925e80783c7721d',
                name: 'Coles',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coles_logo.svg/1200px-Coles_logo.svg.png'
            },
            {
                _id: '596634c0b925e80783c7721e',
                name: 'Super Cheap Storage',
                logo: 'https://pbs.twimg.com/profile_images/503746566574718976/DaszppQV.jpeg'
            }
        ]
    },
    {
        'model': 'Project',
        'documents': [
          {
          'clientId': '596634c0b925e80783c7721d',
          'name': 'Mastercard 1',
          'type': 'Rebrand',
          'description': 'Marketing Wants a new image',
          'status': "I'm not sure what to put here",
          'priority': true,
          'startDate': Date.now(),
          'endDate': Date.now(),
          },{
          'clientId': '596634c0b925e80783c7721d',
          'name': 'West Fleet',
          'type': 'Maintainance',
          'description': 'People keep crashig their shit',
          'status': "I'm not sure what to put here",
          'priority': false,
          'startDate': Date.now(),
          'endDate': Date.now(),
        },{
          'clientId': '596634c0b925e80783c7721d',
          'name': 'Mastercard 2',
          'type': 'Rebrand',
          'description': 'Marketing Wants a new image',
          'status': "I'm not sure what to put here",
          'priority': false,
          'startDate': Date.now(),
          'endDate': Date.now(),
        },{
        'clientId': '596634c0b925e80783c7721e',
        'name': 'Maintainance',
        'type': 'Maintainance',
        'description': 'Fixing shit as per usual',
        'status': "I'm not sure what to put here",
        'priority': true,
        'startDate': Date.now(),
        'endDate': Date.now(),
      },{
        'clientId': '596634c0b925e80783c7721e',
        'name': 'Micheal Jacksons',
        'type': 'Rebrand',
        'description': 'Billie jean is honestly, not my lovvveeerrr',
        'status': "I'm not sure what to put here",
        'priority': true,
        'startDate': Date.now(),
        'endDate': Date.now(),
        }
        ]
    }
]
  seeder.connect('mongodb://localhost/yfm', () => {
    // Load Mongoose models
    seeder.loadModels([
        './models/booking.js',
        './models/company.js',
        './models/job.js',
        './models/project.js',
        './models/task.js'
    ])
    seeder.clearModels(['Company','Project'], function() {

      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
          // throw Error('populate Models failed')
      });
  })
})
}

module.exports = {
  //Desotrys and seeds again
  fill: fill
}
