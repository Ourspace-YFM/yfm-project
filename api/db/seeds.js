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
          "_id": "596c52e6cfa78333529928fe",
          'clientId': '596634c0b925e80783c7721d',
          'name': 'Mastercard 1',
          'type': 'Rebrand',
          'description': 'Marketing Wants a new image',
          'status': "I'm not sure what to put here",
          'priority': true,
          'startDate': Date.now(),
          'endDate': Date.now(),
          },{
          "_id": "596c52e6cfa78333529928ff",
          'clientId': '596634c0b925e80783c7721d',
          'name': 'West Fleet',
          'type': 'Maintainance',
          'description': 'People keep crashig their shit',
          'status': "I'm not sure what to put here",
          'priority': false,
          'startDate': Date.now(),
          'endDate': Date.now(),
          },{
          "_id": "596c52e6cfa7833352992900",
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
    },{
        'model': 'Job',
        'documents': [
        {
        'parentProject': '596c52e6cfa78333529928fe',
        'owner': '596634c0b925e80783c7721e',
        'name': 'Jenny & Steve reskin',
        'status': "I'm not sure what to put here",
        'description': 'anoda day, anoda dolla',
        },{
        'parentProject': '596c52e6cfa78333529928fe',
        'owner': '596634c0b925e80783c7721e',
        'name': 'Dave & John canvas refit',
        'status': "I'm not sure what to put here",
        'description': '3 Vynls',
      }, {
        'parentProject': '596c52e6cfa78333529928ff',
        'owner': '596634c0b925e80783c7721d',
        'name': 'Damage repair',
        'status': "I'm not sure what to put here",
        'description': 'DUI on our truck....',
        }, {
        'parentProject': '596c52e6cfa78333529928ff',
        'owner': '596634c0b925e80783c7721d',
        'name': 'Retighten vynl',
        'status': "I'm not sure what to put here",
        'description': 'Just needs plastic part',
        }
      ]
    },{
        'model': 'Location',
        'documents': []
    }
]
  seeder.connect('mongodb://localhost/yfm', () => {
    // Load Mongoose models
    seeder.loadModels([
        './models/booking.js',
        './models/company.js',
        './models/job.js',
        './models/project.js',
        './models/task.js',
        './models/location.js'
    ])
    seeder.clearModels(['Company','Project','Location'], function() {

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
