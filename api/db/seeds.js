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
        },{
          _id: '596634c0b925e80783c7721e',
          name: 'Super Cheap Storage',
          logo: 'https://pbs.twimg.com/profile_images/503746566574718976/DaszppQV.jpeg'
        },{
          name: 'Bokay',
          logo: ''
        },{
          name: 'Myer',
          logo: ''
        },{
          name: 'City of Onkaparinga',
          logo: ''
        },{
          name: 'LBE Signs',
          logo: ''
        },{
          name: 'Genuine Truck Bodies',
          logo: ''
        },{
        },{
          name: 'Mercedes Benz Australia',
          logo: ''
        },{
          name: 'Sika Australia',
          logo: ''
        }
      ]
    },{
      model: 'Service',
      documents: [
        {
          companyId: '596634c0b925e80783c7721d',
        }
      ]
    },{
      'model': 'Project',
      'documents': [
        {
         "_id": "596c52e6cfa78333529928fe",
         'clientId': '596634c0b925e80783c7721d',
         'name': 'Mastercard 1 National Rebrand',
         'type': 'Rebrand',
         'description': 'Nation wide rebrand of all SKN vans with new MasterCard campaign',
         'status': 'Closed',
         'priority': true,
         'startDate': Date.now(),
         'endDate': Date.now(),
        },{
          "_id": "596c52e6cfa78333529928ff",
          'clientId': '596634c0b925e80783c7721d',
          'name': 'COL fleet reapirs & maintenance',
          'type': 'Maintainance',
          'description': 'Ongoing repairs and maintenance of the COL fleet',
          'status': 'Open',
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
          "_id": "596c6c85c5dbc447854c9a60",
          'projectId': '596a093b8b062a980ae4c1dc',
          'owner': '596634c0b925e80783c7721e',
          'name': '',
          'status': "Open",
          'description': 'anoda day, anoda dolla',
        },{
          "_id": "596c6c85c5dbc447854c9a62",
          'projectId': '596a093b8b062a980ae4c1dc',
          'owner': '596634c0b925e80783c7721e',
          'name': 'Dave & John canvas refit',
          'status': "Open",
          'description': '3 Vynls',
        },{
          "_id": "596c6c85c5dbc447854c9a5f",
          'projectId': '596a093b8b062a980ae4c1db',
          'owner': '596634c0b925e80783c7721d',
          'name': 'Damage repair',
          'status': "I'm not sure what to put here",
          'description': 'DUI on our truck....',
        },{
          "_id": "596c6c85c5dbc447854c9a61",
          'projectId': '596a093b8b062a980ae4c1db',
          'owner': '596634c0b925e80783c7721d',
          'name': 'Retighten vynl',
          'status': "I'm not sure what to put here",
          'description': 'Just needs plastic part',
        }
      ]
    },{
        'model': 'Task',
        'documents': [
        {
          '_id': '596dc1db10dc3a08f61be9f6',
          'parentJob': '596c6c85c5dbc447854c9a60',
          'name': 'Remove/replace read door SAV',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9f7',
          'parentJob': '596c6c85c5dbc447854c9a60',
          'name': 'Remove/replace PS skin',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9f8',
          'parentJob': '596c6c85c5dbc447854c9a60',
          'name': 'Remove/replace DS skin',
          'status': 'Incomplete',
          'completed': false,
        },{
          '_id': '596dc1db10dc3a08f61be9f9',
          'parentJob': '596c6c85c5dbc447854c9a62',
          'name': 'Install D/S skin',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9fa',
          'parentJob': '596c6c85c5dbc447854c9a62',
          'name': 'Install P/S skin',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '1db10dc3a08f61be9fb',
          'parentJob': '596c6c85c5dbc447854c9a62',
          'name': 'Remove/Replace D/S door decal',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9fc',
          'parentJob': '596c6c85c5dbc447854c9a62',
          'name': 'Replace missing/damaged corner covers',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9fd',
          'parentJob': '596c6c85c5dbc447854c9a5f',
          'name': 'Reglue front vertical D/S base frame',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61be9fe',
          'parentJob': '596c6c85c5dbc447854c9a5f',
          'name': 'Replace damaged/missing corner covers',
          'status': 'Complete',
          'completed': false,
        },{
          '_id': '596dc1db10dc3a08f61be9ff',
          'parentJob': '596c6c85c5dbc447854c9a5f',
          'name': 'Remove/replace D/S weight decal',
          'status': 'Incomplete',
          'completed': false,
        },{
          '_id': '596dc1db10dc3a08f61bea00',
          'parentJob': '596c6c85c5dbc447854c9a61',
          'name': 'Remove/replace P/S skin',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61bea01',
          'parentJob': '596c6c85c5dbc447854c9a61',
          'name': 'Replace damaged/missing corner covers',
          'status': 'Complete',
          'completed': false,
        },{
          '_id': '596dc1db10dc3a08f61bea02',
          'parentJob': '596c6c85c5dbc447854c9a61',
          'name': 'Install D/S base frame',
          'status': 'Incomplete',
          'completed': false,
        },{
          '_id': '596dc1db10dc3a08f61bea03',
          'parentJob': '596c6c85c5dbc447854c9a61',
          'name': 'Remove/replace P/S skin',
          'status': 'Complete',
          'completed': true,
        },{
          '_id': '596dc1db10dc3a08f61bea04',
          'parentJob': '596c6c85c5dbc447854c9a61',
          'name': 'Install P/S ID decal',
          'status': 'Incomplete',
          'completed': false,
        }
      ]
    },{
        'model': 'Location',
        'documents': [
           {
              "name":"Albury",
              "coordinates":[
                 -36.0824321,
                 146.9127367
              ],
              "street":"Cnr Townend & Smollet Sts",
              "city":"Albury",
              "state":"VIC",
              "postcode":"2640",
              "phoneNumber":[
                 "02 6021 7806",
                 [
                    10
                 ]
              ],
              "email":"Coles.0693.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kylie Koschel",
                 "Susan Ward",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Alexander Heights",
              "coordinates":[
                 -31.8312436,
                 115.8529703
              ],
              "street":"Cnr Mirrabooka Ave & Griffon Way",
              "city":"Alexander Heights",
              "state":"WA",
              "postcode":"6064",
              "phoneNumber":[
                 "08 9343 0099",
                 [
                    10
                 ]
              ],
              "email":"Coles.0365.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Susan Vernon",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Alice Springs",
              "coordinates":[
                 -23.6982962,
                 133.8789453
              ],
              "street":"\"Alice Springs S/C~ Cnr Gregory Tce & Bath St\"",
              "city":"Alice Springs",
              "state":"NT",
              "postcode":"870",
              "phoneNumber":[
                 "08 8952 4575",
                 [
                    10
                 ]
              ],
              "email":"Coles.0418.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Lisa Morley",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Aspley",
              "coordinates":[
                 -27.3627851,
                 153.0093107
              ],
              "street":"Albany Creek Road",
              "city":"Aspley",
              "state":"QLD",
              "postcode":"4034",
              "phoneNumber":[
                 "07 36309730",
                 [
                    10
                 ]
              ],
              "email":"Coles.4670.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Franca Febbo",
                 "Alisha Fertjowski",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Bacchus Marsh",
              "coordinates":[
                 -37.6762492,
                 144.4406627
              ],
              "street":"\"Bacchus Marsh S/C~ Cnr Main & Young Sts\"",
              "city":"Bacchus Marsh",
              "state":"VIC",
              "postcode":"3340",
              "phoneNumber":[
                 "03 5366 0560",
                 [
                    10
                 ]
              ],
              "email":"Coles.0672.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Alice Dowling",
                 "Angela McNeill",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Ballina",
              "coordinates":[
                 -28.8601634,
                 153.5592574
              ],
              "street":"Cnr Fox & Kerr Sts",
              "city":"Ballina",
              "state":"NSW",
              "postcode":"2478",
              "phoneNumber":[
                 "02 6618 5560",
                 [
                    10
                 ]
              ],
              "email":"Coles.4401.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Lana Dever",
                 "Emma Salgram",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Banksia Grove",
              "coordinates":[
                 -31.7055863,
                 115.8013273
              ],
              "street":"\"1001 Joondalup Drive~ Cnr Joseph Banks Blvd\"",
              "city":"Banksia Grove",
              "state":"WA",
              "postcode":"6031",
              "phoneNumber":[
                 "08 9406 2860",
                 [
                    10
                 ]
              ],
              "email":"Coles.0260.online.manager@coles.com.au ",
              "primaryContacts":[
                 "Mark Ewing",
                 "Jacki Christopher",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Bassendean",
              "coordinates":[
                 -31.90200059999999,
                 115.954267
              ],
              "street":"Cnr West & Guildford Roads",
              "city":"Bassendean",
              "state":"WA",
              "postcode":"6054",
              "phoneNumber":[
                 "08 9261 5162",
                 [
                    10
                 ]
              ],
              "email":"Coles.0395.Online.Manager@Coles.com.au",
              "primaryContacts":[
                 "Rob Chatley",
                 "Vicki Jeffery",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Bateau Bay",
              "coordinates":[
                 -33.375362,
                 151.472421
              ],
              "street":"\"Bay Village S/C~ The Entrance Rd\"",
              "city":"Bateau Bay",
              "state":"NSW",
              "postcode":"2261",
              "phoneNumber":[
                 "02 4332 0438",
                 [
                    10
                 ]
              ],
              "email":"Coles.0904.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Carmen Zommers",
                 "Rebecca Tout",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Beeliar",
              "coordinates":[
                 -32.1280805,
                 115.796386
              ],
              "street":"8  Durin Avenue",
              "city":"Beeliar",
              "state":"WA",
              "postcode":"6164",
              "phoneNumber":[
                 "08 6595 5360",
                 [
                    10
                 ]
              ],
              "email":"Coles.0494.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kelly Young",
                 "Lee Giles",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Belmont",
              "coordinates":[
                 -33.035911,
                 151.6587183
              ],
              "street":"Corner Macquarie Street and Edgar Street",
              "city":"Belmont",
              "state":"NSW",
              "postcode":"2280",
              "phoneNumber":[
                 "02 4945 0213",
                 [
                    10
                 ]
              ],
              "email":"Coles.0823.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Beryl Hudson",
                 "Veronica Mullane",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Bendigo",
              "coordinates":[
                 -36.7614118,
                 144.2834838
              ],
              "street":"Cnr Myer & Williamson St",
              "city":"Bendigo",
              "state":"VIC",
              "postcode":"3550",
              "phoneNumber":[
                 "03 5441 1539",
                 [
                    10
                 ]
              ],
              "email":"Coles.0638.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Robyn Keefe",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Benowa",
              "coordinates":[
                 -28.0004672,
                 153.3762844
              ],
              "street":"\"21 Ross Street~ Benowa\"",
              "city":"Benowa Village",
              "state":"QLD",
              "postcode":"4217",
              "phoneNumber":[
                 "07 5510 7560",
                 [
                    10
                 ]
              ],
              "email":"Coles.4390.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kristen Charlton",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Bunbury",
              "coordinates":[
                 -33.3283308,
                 115.6407407
              ],
              "street":"Cnr Blair and Stevens Streets",
              "city":"Bunbury",
              "state":"WA",
              "postcode":"6230",
              "phoneNumber":[
                 "08 9791 3975",
                 [
                    10
                 ]
              ],
              "email":"Coles.0339.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kim McDonough",
                 "Vacant",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Burwood",
              "coordinates":[
                 -33.874692,
                 151.1058779
              ],
              "street":"\"Westfield Burwood~ 100 Burwood Rd\"",
              "city":"Burwood",
              "state":"NSW",
              "postcode":"2134",
              "phoneNumber":[
                 "",
                 [
                    10
                 ]
              ],
              "email":"",
              "primaryContacts":[

              ]
           },
           {
              "name":"Byford",
              "coordinates":[
                 -32.21976300000001,
                 116.0067963
              ],
              "street":"20 Abernethy Road",
              "city":"Byford",
              "state":"WA",
              "postcode":"6122",
              "phoneNumber":[
                 "08 9532 0960",
                 [
                    10
                 ]
              ],
              "email":"Coles.0263.online.manager@coles.com.au",
              "primaryContacts":[
                 "Tracey MacMillan",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Caboolture",
              "coordinates":[
                 -27.0851119,
                 152.9490602
              ],
              "street":"\"Caboolture Park S/C~ 60-78 King St\"",
              "city":"Caboolture",
              "state":"QLD",
              "postcode":"4510",
              "phoneNumber":[
                 "07 5499 3787",
                 [
                    10
                 ]
              ],
              "email":"Coles.4404.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Tracy Bourke",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Cairns",
              "coordinates":[
                 -16.9331266,
                 145.7528037
              ],
              "street":"\"274 Mulgrave Rd~ Westcourt\"",
              "city":"Cairns",
              "state":"QLD",
              "postcode":"4870",
              "phoneNumber":[
                 "07 4041 3267",
                 [
                    10
                 ]
              ],
              "email":"Coles.4443.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Steven Myatt",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Cannonvale",
              "coordinates":[
                 -20.2771684,
                 148.6992691
              ],
              "street":"Cnr Island Drive & Shute Harbour Road",
              "city":"Cannonvale",
              "state":"QLD",
              "postcode":"4802",
              "phoneNumber":[
                 "07 4948 2789",
                 [
                    10
                 ]
              ],
              "email":"Coles.4598.Online.Manager@coles.com.au ",
              "primaryContacts":[
                 "Anne Ten-Tye",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Capalaba",
              "coordinates":[
                 -27.5251651,
                 153.1895434
              ],
              "street":"Morton Bay Road",
              "city":"Capalaba",
              "state":"QLD",
              "postcode":"4157",
              "phoneNumber":[
                 "07 3900 3760",
                 [
                    10
                 ]
              ],
              "email":"Coles.8759.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Sandra Vanderzipp",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Carlingford",
              "coordinates":[
                 -33.7777204,
                 151.0518224
              ],
              "street":"Cnr Pennant Hills & Carlingford Roads",
              "city":"Carlingford",
              "state":"NSW",
              "postcode":"2118",
              "phoneNumber":[
                 "02 9871 2452",
                 [
                    10
                 ]
              ],
              "email":"Coles.0872.online.manager@coles.com.au",
              "primaryContacts":[
                 "Cathy Arcuri",
                 "Julian Seitu",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Casuarina",
              "coordinates":[
                 -12.3775136,
                 130.8821298
              ],
              "street":"Cnr Dripstone & Trower Rd",
              "city":"Casuarina",
              "state":"NT",
              "postcode":"810",
              "phoneNumber":[
                 "08 8927 6714",
                 [
                    10
                 ]
              ],
              "email":"Coles.0404.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Tracey Mciver",
                 "Angela Spencer",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Casula",
              "coordinates":[
                 -33.948068,
                 150.899674
              ],
              "street":"\"Casula Mall Shopping Centre~ Kurrajong Rd\"",
              "city":"Casula",
              "state":"NSW",
              "postcode":"2170",
              "phoneNumber":[
                 "02 9602 7855",
                 [
                    10
                 ]
              ],
              "email":"Coles.0908.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Joel Birch ",
                 "Sharon Bellamy",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Christies Beach",
              "coordinates":[
                 -35.1382768,
                 138.4814555
              ],
              "street":"101 Beach Rd",
              "city":"Christies Beach",
              "state":"SA",
              "postcode":"5165",
              "phoneNumber":[
                 "08 8326 1885",
                 [
                    10
                 ]
              ],
              "email":"Coles.4933.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Marion Demaria",
                 "Jeremy Frannis",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Churchill",
              "coordinates":[
                 -34.865371,
                 138.581527
              ],
              "street":"\"Churchill Centre~ 380-408 Churchill Road\"",
              "city":"Churchill",
              "state":"SA",
              "postcode":"5084",
              "phoneNumber":[
                 "08 8360 3860",
                 [
                    10
                 ]
              ],
              "email":"Coles.4972.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Sally-Ann Lehmann",
                 "Sue Sandilands",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Coburg",
              "coordinates":[
                 -37.742572,
                 144.9661885
              ],
              "street":"451/459 Sydney Road",
              "city":"Coburg",
              "state":"VIC",
              "postcode":"3058",
              "phoneNumber":[
                 "03 9350 1278",
                 [
                    10
                 ]
              ],
              "email":"Coles.0592.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Virginia Bevilacqua ",
                 "Ross James",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Coburg North ",
              "coordinates":[
                 -37.7315464,
                 144.9503229
              ],
              "street":"180 Gaffney Street",
              "city":"Coburg North ",
              "state":"VIC",
              "postcode":"3058",
              "phoneNumber":[
                 "",
                 [
                    10
                 ]
              ],
              "email":"",
              "primaryContacts":[

              ]
           },
           {
              "name":"Dee Why",
              "coordinates":[
                 -33.7525165,
                 151.2891462
              ],
              "street":"\"Dee Why Plaza~ 36 Howard Ave\"",
              "city":"Dee Why",
              "state":"NSW",
              "postcode":"2099",
              "phoneNumber":[
                 "0439 205 340",
                 [
                    10
                 ]
              ],
              "email":"Coles.0784.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Lachlan Swinbourne",
                 "David Mclean",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Deer Park",
              "coordinates":[
                 -37.752247,
                 144.7774557
              ],
              "street":"\"28-72 Neale Rd\"",
              "city":"Deer Park",
              "state":"VIC",
              "postcode":"3023",
              "phoneNumber":[
                 "03 9363 9160",
                 [
                    10
                 ]
              ],
              "email":"coles.7612.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Sally Clough",
                 "Mark Cassidy",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Dianella",
              "coordinates":[
                 -31.8963875,
                 115.8709342
              ],
              "street":"366 Grand Promenade",
              "city":"Dianella",
              "state":"WA",
              "postcode":"6059",
              "phoneNumber":[
                 "08 9267 6760",
                 [
                    10
                 ]
              ],
              "email":"Coles.0256.Online.Manager@coles.com.au ",
              "primaryContacts":[
                 "Sarah Abraham",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Emerald",
              "coordinates":[
                 -23.5281035,
                 148.1630059
              ],
              "street":"Cnr Clermont & Opal Sts",
              "city":"Emerald",
              "state":"QLD",
              "postcode":"4720",
              "phoneNumber":[
                 "07 4980 8100",
                 [
                    10
                 ]
              ],
              "email":"Coles.4541.online.manager@coles.com.au ",
              "primaryContacts":[
                 "Bec Reynolds",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Endeavour Hills",
              "coordinates":[
                 -37.976662,
                 145.25832
              ],
              "street":"\"Endeavour Hills S/C~  Matthew Flinders Ave\"",
              "city":"Endeavour Hills",
              "state":"VIC",
              "postcode":"3802",
              "phoneNumber":[
                 "03 9700 6952",
                 [
                    10
                 ]
              ],
              "email":"Coles.0651.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Jacinta Sprague",
                 "Brenna Bourke",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Fairfield",
              "coordinates":[
                 -27.508059,
                 153.024887
              ],
              "street":"Cnr Brougham St & Fairfield Road",
              "city":"Fairfield",
              "state":"QLD",
              "postcode":"4103",
              "phoneNumber":[
                 "07 3214 6560",
                 [
                    10
                 ]
              ],
              "email":"Coles.4512.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Lyvia Smith",
                 "Lisa Dale",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Fletcher",
              "coordinates":[
                 -32.8776022,
                 151.6478367
              ],
              "street":"Lot 901 221 Cnr Minmi Rd & Churnwood Drive",
              "city":"Fletcher",
              "state":"NSW",
              "postcode":"2287",
              "phoneNumber":[
                 "02 4941 6360",
                 [
                    10
                 ]
              ],
              "email":"Coles.0940.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Samantha Cremor",
                 "Andrew Lance",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Flinders Square",
              "coordinates":[
                 -31.9096951,
                 115.8485962
              ],
              "street":"\"Flinders Square S/C~ Cnr Wiluna & Flinders Sts\"",
              "city":"Flinders Square",
              "state":"WA",
              "postcode":"6060",
              "phoneNumber":[
                 "",
                 [
                    10
                 ]
              ],
              "email":"",
              "primaryContacts":[

              ]
           },
           {
              "name":"Fremantle",
              "coordinates":[
                 -32.0510479,
                 115.7482448
              ],
              "street":"Cn Cantonement & Goldsborough St",
              "city":"Fremantle",
              "state":"WA",
              "postcode":"6160",
              "phoneNumber":[
                 "08 9430 8319",
                 [
                    10
                 ]
              ],
              "email":"Coles.0342.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Klara Allsopp",
                 "Helen McGary",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Gawler",
              "coordinates":[
                 -34.5952378,
                 138.748433
              ],
              "street":"\"Nothern Market S/C~ Cnr Murray & Cowan Sts\"",
              "city":"Gawler",
              "state":"SA",
              "postcode":"5118",
              "phoneNumber":[
                 "08 8522 4792",
                 [
                    10
                 ]
              ],
              "email":"Coles.0444.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Brenton Stone",
                 "Casey Greunig",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Gladstone",
              "coordinates":[
                 -24.6233337,
                 149.7782871
              ],
              "street":"\"Kim Kora S/C~ Dawson Hwy\"",
              "city":"Gladstone",
              "state":"QLD",
              "postcode":"4680",
              "phoneNumber":[
                 "07 4978 6930",
                 [
                    10
                 ]
              ],
              "email":"Coles.4406.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kirsty Bailey",
                 "Kirsty Innes",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Glenorchy",
              "coordinates":[
                 -42.832121,
                 147.2737168
              ],
              "street":"387-391 main road Glenorchy",
              "city":"Glenorchy",
              "state":"TAS",
              "postcode":"7010",
              "phoneNumber":[
                 "03 6274 1436",
                 [
                    10
                 ]
              ],
              "email":"Coles.7645.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Jessica Henry",
                 "Melissa Luttrell",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Gosnells",
              "coordinates":[
                 -32.0692618,
                 115.999475
              ],
              "street":"2160 Albany Hwy",
              "city":"Gosnells",
              "state":"WA",
              "postcode":"6110",
              "phoneNumber":[
                 "08 9398 1434",
                 [
                    10
                 ]
              ],
              "email":"Coles.0384.Online.Manager@coles.com.au ",
              "primaryContacts":[
                 "Amit Malhotra",
                 "Nyree Stringer",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Greenacre",
              "coordinates":[
                 -33.9060409,
                 151.0561831
              ],
              "street":"13-19 Boronia Rd",
              "city":"Greenacre",
              "state":"NSW",
              "postcode":"2190",
              "phoneNumber":[
                 "02 8709 0460",
                 [
                    10
                 ]
              ],
              "email":"Coles.5792.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Graham Jones",
                 "Sose Tupou",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Greenacres",
              "coordinates":[
                 -34.8702905,
                 138.635155
              ],
              "street":"Cnr Muller & Floridale Rds",
              "city":"Greenacres",
              "state":"SA",
              "postcode":"5086",
              "phoneNumber":[
                 "08 8368 6160",
                 [
                    10
                 ]
              ],
              "email":"Coles.4948.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Linda Anderson",
                 "Tiffany Elliot",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Gungahlin",
              "coordinates":[
                 -35.1855205,
                 149.134776
              ],
              "street":"Cnr Hibberson Street and Gungahlin Place",
              "city":"Gungahlin",
              "state":"ACT",
              "postcode":"2912",
              "phoneNumber":[
                 "(02) 6123 4560",
                 [
                    10
                 ]
              ],
              "email":"Coles.0803.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Paul Agresta ",
                 "Crystal Cook",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Halls Head",
              "coordinates":[
                 -32.54814,
                 115.70249
              ],
              "street":"18 Guava Way",
              "city":"Halls Head",
              "state":"WA",
              "postcode":"6210",
              "phoneNumber":[
                 "08 9586 5160",
                 [
                    10
                 ]
              ],
              "email":"Coles.0257.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "May Wong",
                 "Steven Sizer",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Hastings",
              "coordinates":[
                 -38.3060029,
                 145.186769
              ],
              "street":"Cnr Church & Victoria Sts",
              "city":"Hastings",
              "state":"VIC",
              "postcode":"3915",
              "phoneNumber":[
                 "03 5979 3743",
                 [
                    10
                 ]
              ],
              "email":"Coles.0640.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Gayle Gilchrist",
                 "Vanessa Sutterby",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Hervey Bay",
              "coordinates":[
                 -25.290103,
                 152.835408
              ],
              "street":"Bay Central SC 6 Central Ave",
              "city":"Hervey Bay Central",
              "state":"QLD",
              "postcode":"4655",
              "phoneNumber":[
                 "07 4196 9500",
                 [
                    10
                 ]
              ],
              "email":"Coles.4529.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Leonie Walker",
                 "TBA- New Manager ",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Hoppers Crossing",
              "coordinates":[
                 -37.8769472,
                 144.6820022
              ],
              "street":"\"Werribee Plaza SC~ Cnr Derrimut Rd & Heath Rd\"",
              "city":"Hoppers Crossing",
              "state":"VIC",
              "postcode":"3029",
              "phoneNumber":[
                 "03 9974 7359",
                 [
                    10
                 ]
              ],
              "email":"Coles.0691.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Karen Sutton",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Kellyville",
              "coordinates":[
                 -33.7142577,
                 150.9730033
              ],
              "street":"Wrights Road ",
              "city":"Kellyville",
              "state":"NSW",
              "postcode":"2155",
              "phoneNumber":[
                 "02 8818 2160",
                 [
                    10
                 ]
              ],
              "email":"Coles.0883.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Ram Sevani",
                 "Scott Bellamy ",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Loganholme",
              "coordinates":[
                 -27.663267,
                 153.172986
              ],
              "street":"Cnr Pacific Highway & Bryants Road",
              "city":"Loganholme",
              "state":"QLD",
              "postcode":"4129",
              "phoneNumber":[
                 "07 3801 7260",
                 [
                    10
                 ]
              ],
              "email":"Coles.4407.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Karen Harris",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Mackay",
              "coordinates":null,
              "street":"\"Mt Pleasant SC~ Cnr Malcomson St & Mackay Bucasia Rd\"",
              "city":"Mackay",
              "state":"QLD",
              "postcode":"4740",
              "phoneNumber":[
                 "07 4942 6745",
                 [
                    10
                 ]
              ],
              "email":"Coles.4481.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Stacey Brady",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Maddington",
              "coordinates":[
                 -32.0534354,
                 115.9818609
              ],
              "street":"Cnr Attfield St & Olga Rd",
              "city":"Maddington",
              "state":"WA",
              "postcode":"6109",
              "phoneNumber":[
                 "08 9452 0163",
                 [
                    10
                 ]
              ],
              "email":"Coles.0337.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Sharleen Price",
                 "Manni Bahachu",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Mandurah",
              "coordinates":[
                 -32.5374401,
                 115.7447319
              ],
              "street":"Cnr Pinjarra & Mandurah Rds",
              "city":"Mandurah",
              "state":"WA",
              "postcode":"6210",
              "phoneNumber":[
                 "08 9583 5257",
                 [
                    10
                 ]
              ],
              "email":"Coles.0311.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Angie Langford",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Mango Hill",
              "coordinates":[
                 -27.2425629,
                 153.0261564
              ],
              "street":"1-21 Halpine Drive",
              "city":"Mango Hill",
              "state":"QLD",
              "postcode":"4509",
              "phoneNumber":[
                 "07 3490 3600",
                 [
                    10
                 ]
              ],
              "email":"Coles.4436.online.manager@coles.com.au",
              "primaryContacts":[
                 "Paula Fitzgerald",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Maroochydore",
              "coordinates":[
                 -26.64618,
                 153.07648
              ],
              "street":"Sunshine Plaza S/C Bunro St",
              "city":"Maroochydore",
              "state":"QLD",
              "postcode":"4558",
              "phoneNumber":[
                 "07 5409 4260",
                 [
                    10
                 ]
              ],
              "email":"Coles.4523.Online.Manager@coles.com.au ",
              "primaryContacts":[
                 "Emm Keslake",
                 "Shane Colman",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Mirrabooka",
              "coordinates":[
                 -31.8735486,
                 115.8607866
              ],
              "street":"Cnr Yirrigan Dr & Ferrier Rd",
              "city":"Mirrabooka",
              "state":"WA",
              "postcode":"6061",
              "phoneNumber":[
                 "08 9207 3931",
                 [
                    10
                 ]
              ],
              "email":"Coles.0314.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Brad Esselbach",
                 "Leonie Ryniker",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Mona Vale",
              "coordinates":[
                 -33.6759177,
                 151.3053635
              ],
              "street":"10 Park Street",
              "city":"Mona Vale",
              "state":"NSW",
              "postcode":"2103",
              "phoneNumber":[
                 "02 9999 0698",
                 [
                    10
                 ]
              ],
              "email":"Coles.0884.online.manager@coles.com.au",
              "primaryContacts":[
                 "Heidi Schofield",
                 "Jessica Hofbauer-Jonas",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Morwell",
              "coordinates":[
                 -38.2362251,
                 146.4305019
              ],
              "street":"\"Mid Valley Shopping Centre~ Princes Hwy\"",
              "city":"Morwell",
              "state":"VIC",
              "postcode":"3841",
              "phoneNumber":[
                 "03 5135 3692",
                 [
                    10
                 ]
              ],
              "email":"coles.7899.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Meagan",
                 "Kim",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Mowbray",
              "coordinates":[
                 -41.4054664,
                 147.1315965
              ],
              "street":"385 Invermay Road",
              "city":"Mowbray",
              "state":"TAS",
              "postcode":"7248",
              "phoneNumber":[
                 "03 6324 4760",
                 [
                    10
                 ]
              ],
              "email":"Coles.7502.online.manager@coles.com.au",
              "primaryContacts":[
                 "Beau Ward",
                 "Fiona Kerrison",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Mt Gambier",
              "coordinates":[
                 -37.828301,
                 140.7761748
              ],
              "street":"Cnr James & Elizabeth Streets",
              "city":"Mt Gambier",
              "state":"SA",
              "postcode":"5290",
              "phoneNumber":[
                 "08 8725 6655",
                 [
                    10
                 ]
              ],
              "email":"coles.0433.online.manager@coles.com.au",
              "primaryContacts":[
                 "Rebecca Bell"
              ]
           },
           {
              "name":"Murwillumbah",
              "coordinates":[
                 -28.3278034,
                 153.3959445
              ],
              "street":"Cnr Brisbane & Wollumbin St",
              "city":"Murwillumbah",
              "state":"NSW",
              "postcode":"2484",
              "phoneNumber":[
                 "02 6672 2634",
                 [
                    10
                 ]
              ],
              "email":"Coles.4505.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Leonie Pohlmann",
                 "Stacey Gamble ",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Narellan",
              "coordinates":[
                 -34.0393522,
                 150.7367867
              ],
              "street":"326 Camden Valley Way Narellan ",
              "city":"Narellan",
              "state":"NSW",
              "postcode":"2567",
              "phoneNumber":[
                 "02 46457160",
                 [
                    10
                 ]
              ],
              "email":"coles.5800.online.manager@coles.com.au",
              "primaryContacts":[
                 "Jessica Nielson",
                 "Nicole Hopping ",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Nerang",
              "coordinates":[
                 -27.9954048,
                 153.3394673
              ],
              "street":"Station Street",
              "city":"Nerang",
              "state":"QLD",
              "postcode":"4221",
              "phoneNumber":[
                 "07 5578 3322",
                 [
                    10
                 ]
              ],
              "email":"Coles.4501.Online.Manager@Coles.com.au",
              "primaryContacts":[
                 "Fetu Pama",
                 "Karissa Staples"
              ]
           },
           {
              "name":"North Ward",
              "coordinates":[
                 -19.2526573,
                 146.8159387
              ],
              "street":"26-28 MITCHELL STREET",
              "city":"North Ward",
              "state":"QLD",
              "postcode":"4810",
              "phoneNumber":[
                 "07 4721 8900",
                 [
                    10
                 ]
              ],
              "email":"Coles.4649.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Wendy Warren",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Oakleigh",
              "coordinates":[
                 -37.9012376,
                 145.0901858
              ],
              "street":"Cnr Hanover & Portman Sts",
              "city":"Oakleigh",
              "state":"VIC",
              "postcode":"3166",
              "phoneNumber":[
                 "03 9568 5803",
                 [
                    10
                 ]
              ],
              "email":"Coles.0645.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Penny Thomas",
                 "Grant Fraser",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Pagewood",
              "coordinates":[
                 -33.9444798,
                 151.2237466
              ],
              "street":"\"East Gardens SC~ Cnr Bunnerong Rd and Wentworth Ave\"",
              "city":"Pagewood",
              "state":"NSW",
              "postcode":"2035",
              "phoneNumber":[
                 "",
                 [
                    10
                 ]
              ],
              "email":"",
              "primaryContacts":[

              ]
           },
           {
              "name":"Queanbeyan",
              "coordinates":[
                 -35.3529296,
                 149.2353897
              ],
              "street":"131 Monaro Street",
              "city":"Queanbeyan",
              "state":"NSW",
              "postcode":"2620",
              "phoneNumber":[
                 "02 6124 3660",
                 [
                    10
                 ]
              ],
              "email":"Coles.0820.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Gavin Read",
                 "Ruchi Viring",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Richmond NSW",
              "coordinates":[
                 -33.5957025,
                 150.7494272
              ],
              "street":"271 - 281 Windsor St",
              "city":"Richmond",
              "state":"NSW",
              "postcode":"2753",
              "phoneNumber":[
                 "02 4578 0526",
                 [
                    10
                 ]
              ],
              "email":"Coles.0792.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Michelle Cotter",
                 "Nathan Anderson",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Richmond VIC",
              "coordinates":[
                 -37.8256546,
                 144.9961881
              ],
              "street":"198-200 Swan St",
              "city":"Richmond South",
              "state":"VIC",
              "postcode":"3121",
              "phoneNumber":[
                 "03 84200200",
                 [
                    10
                 ]
              ],
              "email":"Coles.0482.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Brenna Bourke",
                 "Daniel Wilcox",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Riverlink",
              "coordinates":[
                 -27.6081327,
                 152.7582694
              ],
              "street":"Cnr of The Terrace and Downs Sts",
              "city":"Riverlink",
              "state":"QLD",
              "postcode":"4305",
              "phoneNumber":[
                 "07 3281 3496",
                 [
                    10
                 ]
              ],
              "email":"Coles.4596.Online.Manager@coles.com.au ",
              "primaryContacts":[
                 "Tammy Baird",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Riverton",
              "coordinates":[
                 -32.0392288,
                 115.9074894
              ],
              "street":"353-361 High Road",
              "city":"Riverton",
              "state":"WA",
              "postcode":"6147",
              "phoneNumber":[
                 "08 9253 4160",
                 [
                    10
                 ]
              ],
              "email":"coles.0465.online.manager@coles.com.au",
              "primaryContacts":[
                 "David Deb",
                 "Alexia Sammut"
              ]
           },
           {
              "name":"Rockhampton",
              "coordinates":[
                 -23.3563744,
                 150.5225805
              ],
              "street":"\"Rockhampton Fair SC~ Musgrave St\"",
              "city":"Rockhampton",
              "state":"QLD",
              "postcode":"4701",
              "phoneNumber":[
                 "07 4930 8464",
                 [
                    10
                 ]
              ],
              "email":"Coles.4455.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Rachel Hausler",
                 "Rebecca Parr",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Rouse Hill",
              "coordinates":[
                 -33.6937192,
                 150.9249421
              ],
              "street":"Corner Windsor Rd & Whitehart Drive",
              "city":"Rouse Hill",
              "state":"NSW",
              "postcode":"2155",
              "phoneNumber":[
                 "02 9836 3461",
                 [
                    10
                 ]
              ],
              "email":"Coles.0924.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Lauren Treloar",
                 "Ammie Tremelyn",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Roxborough Park",
              "coordinates":[
                 -37.639013,
                 144.9319631
              ],
              "street":"250 Somerton Road",
              "city":"Roxborough Park",
              "state":"VIC",
              "postcode":"3064",
              "phoneNumber":[
                 "03 9303 2660",
                 [
                    10
                 ]
              ],
              "email":"Coles.7703.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Georgina Bailey",
                 "Matt",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Roxburgh Park",
              "coordinates":[
                 -37.639013,
                 144.9319631
              ],
              "street":"250 Somerton Road",
              "city":"Roxburgh Park",
              "state":"VIC",
              "postcode":"3064",
              "phoneNumber":[
                 "03 9303 2660",
                 [
                    10
                 ]
              ],
              "email":"Coles.7703.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Georgina Bailey",
                 "Matt",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Runaway Bay",
              "coordinates":[
                 -27.9137821,
                 153.4030862
              ],
              "street":"Cnr Bayview St & Lae Drv",
              "city":"Runaway Bay",
              "state":"QLD",
              "postcode":"4216",
              "phoneNumber":[
                 "07 5537 7990",
                 [
                    10
                 ]
              ],
              "email":"Coles.4530.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Paul Hawkey",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Sebastopol",
              "coordinates":[
                 -37.59927,
                 143.8408543
              ],
              "street":"210 Albert Street",
              "city":"Sebastapol",
              "state":"VIC",
              "postcode":"3356",
              "phoneNumber":[
                 "03 5336 3823",
                 [
                    10
                 ]
              ],
              "email":"Coles.0580.online.manager@coles.com.au",
              "primaryContacts":[
                 "Lyndell Eshuag",
                 "Caroline Hughes",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Shellharbour",
              "coordinates":[
                 -34.5646649,
                 150.8373007
              ],
              "street":"\"Shop 1021~ Shellharbour Square\"",
              "city":"Shellharbour",
              "state":"NSW",
              "postcode":"2529",
              "phoneNumber":[
                 "02 4295 8360",
                 [
                    10
                 ]
              ],
              "email":"Coles.5797.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Elise Woodcock",
                 "Morgan Tipping ",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Springfield Orion",
              "coordinates":[
                 -27.6768575,
                 152.9023417
              ],
              "street":"\"1 Main Street~ Springfield Lakes\"",
              "city":"Springfield Orion",
              "state":"QLD",
              "postcode":"4300",
              "phoneNumber":[
                 "07 3470 3160",
                 [
                    10
                 ]
              ],
              "email":"Coles.4666.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Nathan Garcia",
                 "Karissa Staples"
              ]
           },
           {
              "name":"St Clair",
              "coordinates":[
                 -34.8700124,
                 138.5287151
              ],
              "street":"\"Cheltenham Parade~ Woodville\"",
              "city":"St Clair",
              "state":"SA",
              "postcode":"5011",
              "phoneNumber":[
                 "08 8413 5260",
                 [
                    10
                 ]
              ],
              "email":"Coles.4971.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Richard Dabek",
                 "Damien Franyik",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Sunnybank",
              "coordinates":[
                 -27.6113434,
                 153.0543822
              ],
              "street":"Cnr Calam & Compton Rds",
              "city":"Sunnybank Hills",
              "state":"QLD",
              "postcode":"4109",
              "phoneNumber":[
                 "07 3712 5660",
                 [
                    10
                 ]
              ],
              "email":"Coles.4671.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Roxanne Redfern",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Tamworth",
              "coordinates":[
                 -31.1073823,
                 150.9185119
              ],
              "street":"\"Kathleen Street~ South Tamworth\"",
              "city":"South Tamworth",
              "state":"NSW",
              "postcode":"2340",
              "phoneNumber":[
                 "02 6760 1460",
                 [
                    10
                 ]
              ],
              "email":"Coles.5796.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Louise Ryan",
                 "Rebecca Hayes",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"The Gap",
              "coordinates":[
                 -27.4459006,
                 152.952527
              ],
              "street":"\"1000 Waterworks Road~ The Gap\"",
              "city":"The Gap",
              "state":"QLD",
              "postcode":"4061",
              "phoneNumber":[
                 "07 3511 1196",
                 [
                    10
                 ]
              ],
              "email":"Coles.4506.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Laura McGee",
                 "Karissa Staples"
              ]
           },
           {
              "name":"The Pines",
              "coordinates":[
                 -28.1338957,
                 153.468923
              ],
              "street":"Cnr K.P.McGrath Drive & Guiness Creek Road",
              "city":"The Pines",
              "state":"QLD",
              "postcode":"4221",
              "phoneNumber":[
                 "07 5586 4460",
                 [
                    10
                 ]
              ],
              "email":"Coles.4405.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Kim Miles",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Toormina",
              "coordinates":[
                 -30.3532498,
                 153.0924922
              ],
              "street":"\"Toormina Gardens S/C~ Cnr Minorie Drv & Toormina Rd\"",
              "city":"Toormina",
              "state":"NSW",
              "postcode":"2452",
              "phoneNumber":[
                 "02 6659 6500",
                 [
                    10
                 ]
              ],
              "email":"Coles.5682.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Carolyn Herbert",
                 "Debbie Miles",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Top Ryde",
              "coordinates":[
                 -33.8120293,
                 151.1064609
              ],
              "street":"Cnr Devlin St & Blaxland Rd",
              "city":"Top Ryde",
              "state":"NSW",
              "postcode":"2112",
              "phoneNumber":[
                 "02 88788160",
                 [
                    10
                 ]
              ],
              "email":"Coles.5801.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Filipe Lage",
                 "Leticia Boyd",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Townsville",
              "coordinates":[
                 -19.2981045,
                 146.7616165
              ],
              "street":"Cnr Ross River Rd & Nathan St",
              "city":"Aitkenvale",
              "state":"QLD",
              "postcode":"4814",
              "phoneNumber":[
                 "07 4779 0655",
                 [
                    10
                 ]
              ],
              "email":"Coles.4494.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Meisha Woodfield",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Ulverstone",
              "coordinates":[
                 -41.1571629,
                 146.170268
              ],
              "street":"16 Reibey St",
              "city":"Ulverstone",
              "state":"TAS",
              "postcode":"7315",
              "phoneNumber":[
                 "03 6425 4632",
                 [
                    10
                 ]
              ],
              "email":"Coles.7606.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Tammy Maxwell-Bourke",
                 "Tammy",
                 "Saskia Scott"
              ]
           },
           {
              "name":"Vermont South",
              "coordinates":[
                 -37.8560565,
                 145.1798433
              ],
              "street":"\"Vermont South SC~ cnr Burwood Hwy and Hanover Rd\"",
              "city":"Vermont South",
              "state":"VIC",
              "postcode":"3133",
              "phoneNumber":[
                 "03 8847 4060",
                 [
                    10
                 ]
              ],
              "email":"Coles.0677.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Sami Abdullah",
                 "Andrea Potau",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"Wagga Wagga",
              "coordinates":[
                 -35.11321,
                 147.370851
              ],
              "street":"\"Sturt Mall S/C~ Cnr Forsyth Street & Baylis Sts\"",
              "city":"Wagga Wagga",
              "state":"NSW",
              "postcode":"2650",
              "phoneNumber":[
                 "02 6921 1352",
                 [
                    10
                 ]
              ],
              "email":"Coles.0704.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Gayle Wood",
                 "Barbara Evans",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Waurn Ponds",
              "coordinates":[
                 -38.19942289999999,
                 144.3197542
              ],
              "street":"173-199 Pioneer Road",
              "city":"Waurn Ponds",
              "state":"VIC",
              "postcode":"3216",
              "phoneNumber":[
                 "03 5247 3060",
                 [
                    10
                 ]
              ],
              "email":"Coles.7810.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Tracey Allen",
                 "Sarah Esselbrugge"
              ]
           },
           {
              "name":"West Gosford",
              "coordinates":[
                 -33.4294601,
                 151.3167093
              ],
              "street":"\"West Gosford S/C~ Brisbane Water Drv\"",
              "city":"West Gosford",
              "state":"NSW",
              "postcode":"2250",
              "phoneNumber":[
                 "02 4322 2334",
                 [
                    10
                 ]
              ],
              "email":"Coles.0821.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Adam Wakeling",
                 "Jenna Browning",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Westmead",
              "coordinates":[
                 -33.8039135,
                 150.9797223
              ],
              "street":"29-33 Darcy Road",
              "city":"Westmead",
              "state":"NSW",
              "postcode":"2145",
              "phoneNumber":[
                 "02 8837 7700",
                 [
                    10
                 ]
              ],
              "email":"Coles.0965.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Luke Stubbefield",
                 "Richard Go",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Wilsonton",
              "coordinates":[
                 -27.5421112,
                 151.9263782
              ],
              "street":"\"Erin Street~ Wilsonton\"",
              "city":"Wilsonton",
              "state":"QLD",
              "postcode":"4350",
              "phoneNumber":[
                 "07 4615 1700",
                 [
                    10
                 ]
              ],
              "email":"Coles.4433.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Clayton Booth",
                 "Karissa Staples"
              ]
           },
           {
              "name":"Winston Hills",
              "coordinates":[
                 -33.7757815,
                 150.9756227
              ],
              "street":"Caroline Chisolm Drive",
              "city":"Winston Hills",
              "state":"NSW",
              "postcode":"2153",
              "phoneNumber":[
                 "02 9620 8462",
                 [
                    10
                 ]
              ],
              "email":"Coles.0843.Online.Manager@coles.com.au",
              "primaryContacts":[
                 "Anastasia Tzivanopolous",
                 "Kristina Harriss",
                 "Jayde Hudson (C/T)"
              ]
           },
           {
              "name":"Customer Support Centre",
              "coordinates":[
                 -37.8453794,
                 145.0479078
              ],
              "street":"800 Toorak Road",
              "city":"Hawthorn East",
              "state":"VIC",
              "postcode":"3123",
              "phoneNumber":[
                 "",
                 [
                    10
                 ]
              ],
              "email":"",
              "primaryContacts":[

              ]
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
        './models/task.js',
        './models/service.js'
    ])

    seeder.clearModels(['Service','Company','Project','Location', 'Job', 'Task'], function() {

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
