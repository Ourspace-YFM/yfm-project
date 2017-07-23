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
          _id: '59719d405f8ee87150225b8f',
          name: 'Bokay',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b90',
          name: 'Myer',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b91',
          name: 'City of Onkaparinga',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b92',
          name: 'LBE Signs',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b93',
          name: 'Genuine Truck Bodies',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b95',
          name: 'Mercedes Benz Australia',
          logo: ''
        },{
          _id: '59719d405f8ee87150225b96',
          name: 'Sika Australia',
          logo: ''
        },{
          _id: '597413e439e98c0769da5a65',
          name: 'Alice Crash Repairs',
          logo: ''
        },{
          _id: '597435e196906a669414fa27',
          name: 'D A Signs',
          logo: ''
        },{
          _id: '59749b4c6df3cd4b3b517050',
          name: 'Signwave Parramatta',
          logo: ''
        }
      ]
    },{
      model: 'Service',
      documents: [
        {
          _id: '597438f1ec0f19855b6921b8',
          companyId: '596634c0b925e80783c7721d',
          locationId: '59719d405f8ee87150225b9a',
          role: 'Client',
          type: 'Install Location',
          description: 'COL Alice Springs'
        },{
          _id: '597438f1ec0f19855b6921b9',
          companyId: '596634c0b925e80783c7721d',
          locationId: '59719d405f8ee87150225b9a',
          role: 'Client',
          type: 'COL Store',
          description: 'COL Alice Springs'
        },{
          _id: '597438f1ec0f19855b6921ba',
          companyId: '59719d405f8ee87150225b92',
          locationId: '597434a5d8c8205405cca7ae',
          role: 'Installer',
          type: 'HQ',
          description: 'LBE Signs HQ'
        },{
          _id: '597438f1ec0f19855b6921bb',
          companyId: '597413e439e98c0769da5a65',
          locationId: '597414fa98a3a71116fe07c1',
          role: 'Installer',
          type: 'HQ',
          description: 'Alice Crash Repairs HQ'
        },{
          _id: '597438f1ec0f19855b6921bc',
          companyId: '597413e439e98c0769da5a65',
          locationId: '597414fa98a3a71116fe07c1',
          role: 'Installer',
          type: 'Workshop',
          description: 'Alice Crash Repairs Workshop'
        },{
          _id: '597438f1ec0f19855b6921bd',
          companyId: '597435e196906a669414fa27',
          locationId: '59743795e834d174405a6574',
          role: 'Installer',
          type: 'HQ',
          description: 'D A Signs HQ'
        },{
          _id: '59749ecce9d15f72244e5dc9',
          companyId: '59749b4c6df3cd4b3b517050',
          locationId: '59749d9ac5dee462430ea5ca',
          role: 'Installer',
          type: 'HQ',
          description: 'Signwave Parramatta HQ'
        }
      ]
    },{
      model: 'Project',
      documents: [
        {
          _id: '596c52e6cfa78333529928fe',
          clientId: '596634c0b925e80783c7721d',
          name: '\'Mastercard 1\' Rebrand',
          type: 'Rebrand',
          description: 'Nation wide rebrand of all SKN vans with new MasterCard campaign',
          status: 'Closed',
          priority: true,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '596c52e6cfa78333529928ff',
          clientId: '596634c0b925e80783c7721d',
          name: 'COL fleet reapirs & maintenance',
          type: 'Maintainance',
          description: 'Ongoing nationwide repairs & maintenance of the COL fleet',
          status: 'Open',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '596c52e6cfa7833352992900',
          clientId: '596634c0b925e80783c7721e',
          name: '\'Ex-PM\' campaign rebrand',
          type: 'Rebrand',
          description: 'Full fleet (7x trucks) rear skin rebrand',
          status: 'Closed',
          priority: true,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '5972a76064dc5836cf39a36d',
          clientId: '596634c0b925e80783c7721d',
          name: '30 x new GTB body build',
          type: 'New-build',
          description: '',
          status: 'Open',
          priority: true,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '5972a97aaee6de8ead266867',
          clientId: '59719d405f8ee87150225b90',
          name: '\'Jen Hawkins\' campaign full-fleet rebrand',
          type: 'Rebrand',
          description: '',
          status: 'Closed',
          priority: true,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '59743bd952973f13d720b4d0',
          clientId: '59719d405f8ee87150225b90',
          name: 'Ongoing repairs & maintenance of Myer fleet',
          type: 'Maintenance',
          description: '',
          status: 'Open',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '5972ac80e45696b15021a3b3',
          clientId: '59719d405f8ee87150225b90',
          name: 'New truck setup',
          type: 'New-build',
          description: 'New truck setup (Traxx & SAV) in various states for Myer/Linfox',
          status: 'Closed',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '5972ae520792a1c46ebee7cf',
          clientId: '59719d405f8ee87150225b91',
          name: 'New truck setup',
          type: 'New-build',
          description: 'New truck setup (Traxx-curve) for Onkaparinga Council',
          status: 'Closed',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        }
      ]
    },{
      model: 'Job',
      documents: [
        {
          _id: '5972d38877e3597c6a578c27',
          parentProject: '596c52e6cfa78333529928ff',
          owner: '59719d405f8ee87150225b98',
          name: 'Reapir 3 vans for COL Albury',
          status: 'Incomplete',
          description: 'Van \'Terry\' (M-CB): Corners; Van \'Meagan\' (M-CB): SKN, FRA repairs; Van \'Jonathon\': SKN, SAV repairs'
        },{
          _id: '596c6c85c5dbc447854c9a60',
          parentProject: '596c52e6cfa78333529928ff',
          owner: '59719d405f8ee87150225b9a',
          name: 'Repair 2 vans for COL Alice Springs',
          status: 'Incomplete',
          description: 'Van Alicia (H-G2): SKN, FRA repairs; Van Stan (H-G2): SKN, SAV repairs'
       },{
          _id: '596c6c85c5dbc447854c9a62',
          parentProject: '596c52e6cfa78333529928fe',
          owner: '59719d405f8ee87150225b99',
          name: 'Rebrand 6x vans for COL Alexandra Heights',
          status: 'Incomplete',
          description: 'MC1 Rebrand of 6x vans: 3x H-G1, 3x M-CB'
        },{
          _id: '596c6c85c5dbc447854c9a5f',
          parentProject: '596c52e6cfa7833352992900',
          owner: '596634c0b925e80783c7721d',
          name: 'Rebrand SCS VIC Truck #1',
          status: 'On-hold',
          description: '\'Ex-PM\' rebrand of 1st of 2 VIC trucks - rear SKN only, no SAV.'
        },{
          _id: '596c6c85c5dbc447854c9a61',
          parentProject: '5972ae520792a1c46ebee7cf',
          owner: '596634c0b925e80783c7721d',
          name: 'Install FRA & SKN on new 30m3 hard-waste truck',
          status: 'Incomplete',
          description: ' '
         },{
          _id: '5972b18f151a63e4ea041308',
          parentProject: '5972ac80e45696b15021a3b3',
          owner: '596634c0b925e80783c7721e',
          name: 'New truck measure up (NSW)',
          status: 'Complete',
          description: 'New truck measure up @ Eastern Creek DC (NSW)'
        }
      ]
    },{
      model: 'Booking',
      documents: [
        {
          _id: '597440e438c63043695130f7',
          jobId: '5972d38877e3597c6a578c27',
          taskId: ['5973165c71af1a36b66126ef', '5973165c71af1a36b66126f0', '5973165c71af1a36b66126f1', '5973165c71af1a36b66126f2'],
          name: 'D A Signs @ COL Albury',
          status: 'Tentative',
          installerConfirmed: false,
          clientConfirmed: false,
          changeRequests: [], 
          installerId: '597435e196906a669414fa27',
          locationId: '59719d405f8ee87150225b98',
          bookedDate: Date.now(),
          instructions: '',
          attachments: [],
          actualStartTime: Date.now(),
          actualFinishTime: Date.now()
        },{
          _id: '5974a1de40b8a08c453a8374',
          jobId: '596c6c85c5dbc447854c9a60',
          taskId: ['596dc1db10dc3a08f61be9f6', '596dc1db10dc3a08f61be9f7', '596dc1db10dc3a08f61be9f8'],
          name: 'Alice Crash Repairs @ COL Alice Springs',
          status: 'Complete',
          installerConfirmed: true,
          clientConfirmed: true,
          changeRequests: [], 
          installerId: '597413e439e98c0769da5a65',
          locationId: '59719d405f8ee87150225b9a',
          bookedDate: Date.now(),
          instructions: '',
          attachments: [],
          actualStartTime: Date.now(),
          actualFinishTime: Date.now()
        },{
          _id: "5974a28970e80793d18252c0",
          jobId: "5972b18f151a63e4ea041308",
          taskId: ["5973165c71af1a36b66126f7", "5973165c71af1a36b66126f8", "5973165c71af1a36b66126f9"],
          name: "Signwave Parramatta @ Linfox Erskine Park for Myer",
          status: "Confirmed",
          installerConfirmed: true,
          clientConfirmed: true,
          changeRequests: [], 
          installerId: "59749b4c6df3cd4b3b517050",
          locationId: "59747d6948526cb95cafc0cf",
          bookedDate: Date.now(),
          instructions: '',
          attachments: [],
          actualStartTime: Date.now(),
          actualFinishTime: Date.now()
        },{
          _id:"597528c5799d49291d9dfac6",
          jobId: "596c6c85c5dbc447854c9a5f",
          taskId: [],
          name: "LBE Signs @ SCS Richmond",
          status: "Tentative",
          installerConfirmed: false,
          clientConfirmed: false,
          changeRequests: [], 
          installerId: "59719d405f8ee87150225b92",
          locationId: "5975281ccb9e6921e03287ea",
          bookedDate: Date.now(),
          instructions: "",
          attachments: [],
          actualStartTime: Date.now(),
          actualFinishTime: Date.now()
        }
      ]
    },{
      model: 'Task',
      documents: [
        {
          _id: '5973165c71af1a36b66126ef',
          parentJob: '5972d38877e3597c6a578c27',
          name: 'Remove/replace rear door SAV',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f0',
          parentJob: '5972d38877e3597c6a578c27',
          name: 'Replaced damaged DS front vertical tensioner',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f1',
          parentJob: '5972d38877e3597c6a578c27',
          name: 'Remove/replace PS skin',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f2',
          parentJob: '5972d38877e3597c6a578c27',
          name: 'Replace all damaged/missing corner pieces',
          status: 'Incomplete',
          completed: false
        },{
          _id: '596dc1db10dc3a08f61be9f6',
          parentJob: '596c6c85c5dbc447854c9a60',
          name: 'Remove/replace rear door SAV',
          status: 'Complete',
          completed: true
        },{
          _id: '596dc1db10dc3a08f61be9f7',
          parentJob: '596c6c85c5dbc447854c9a60',
          name: 'Remove/replace PS skin',
          status: 'Complete',
          completed: true
        },{
          _id: '596dc1db10dc3a08f61be9f8',
          parentJob: '596c6c85c5dbc447854c9a60',
          name: 'Remove/replace DS skin',
          status: 'Complete',
          completed: true
        },{
          _id: '5973165c71af1a36b66126f3',
          parentJob: '596c6c85c5dbc447854c9a60',
          name: 'Reglue front vertical D/S base frame',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f4',
          parentJob: '596c6c85c5dbc447854c9a62',
          name: 'Remove/replace rear door SAV',
          status: 'Complete',
          completed: true
        },{
          _id: '5973165c71af1a36b66126f5',
          parentJob: '596c6c85c5dbc447854c9a62',
          name: 'Remove/replace PS skin',
          status: 'Complete',
          completed: true
        },{
          _id: '5973165c71af1a36b66126f6',
          parentJob: '596c6c85c5dbc447854c9a62',
          name: 'Remove/replace DS skin',
          status: 'Complete',
          completed: true
        },{
          _id: '596dc1db10dc3a08f61bea01',
          parentJob: '596c6c85c5dbc447854c9a62',
          name: 'Replace damaged/missing corner covers',
          status: 'Complete',
          completed: true,
        },{
          _id: '596dc1db10dc3a08f61be9fd',
          parentJob: '596c6c85c5dbc447854c9a5f',
          name: 'Remove replace rear skin',
          status: 'Complete',
          completed: true
        },{
          _id: '596dc1db10dc3a08f61be9fe',
          parentJob: '596c6c85c5dbc447854c9a5f',
          name: 'Replace damaged/missing corner covers',
          status: 'Complete',
          completed: false
        },{
          _id: '596dc1db10dc3a08f61bea00',
          parentJob: '596c6c85c5dbc447854c9a61',
          name: 'Install P/S Traxx-Curve frame',
          status: 'Incomplete',
          completed: false
        },{
          _id: '596dc1db10dc3a08f61bea02',
          parentJob: '596c6c85c5dbc447854c9a61',
          name: 'Install D/S Traxx-Curve frame',
          status: 'Incomplete',
          completed: false
        },{
          _id: '596dc1db10dc3a08f61bea03',
          parentJob: '596c6c85c5dbc447854c9a61',
          name: 'Install P/S skin',
          status: 'Incomplete',
          completed: false
        },{
          _id: '596dc1db10dc3a08f61bea04',
          parentJob: '596c6c85c5dbc447854c9a61',
          name: 'Insatall D/S skin',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f7',
          parentJob: '5972b18f151a63e4ea041308',
          name: 'Measure & produce diagram of P/S panel',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f8',
          parentJob: '5972b18f151a63e4ea041308',
          name: 'Measure & produce diagram of D/S panel',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f9',
          parentJob: '5972b18f151a63e4ea041308',
          name: 'Measure & produce diagram of rear panel',
          status: 'Incomplete',
          completed: false
        }
      ]
    },{
      model: 'Location',
      documents: [  
        {
          "_id":"5975281ccb9e6921e03287ea",
          "name":"SCS Footscray",
          "street":"47A/400 Somerville Road",
          "city":"West Footscray",
          "state":"VIC",
          "postcode":"3012",
          "email":"",
          "__v":0,
          "primaryContacts":[],
          "phoneNumber":[
            "+61 3 8547 3976"
          ],
          "coordinates":[
            -37.810324,
            144.863493
          ]
        },{
          "_id":"597414fa98a3a71116fe07c1",
          "name":"Alice Crash Repairs",
          "street":"7 Brown Street",
          "city":"Alice Springs",
          "state":"NT",
          "postcode":"0870",
          "email":"alexi@alicecrashrepairs.com.au",
          "__v":0,
          "primaryContacts":[
            "Alexi Hatzimihail"
          ],
          "phoneNumber":[
            "+61 8 8952 1600"
          ],
          "coordinates":[
            -23.690220,
            133.869832
          ]
        },{  
          "_id":"597434a5d8c8205405cca7ae",
          "name":"LBE Signs",
          "street":"121 The Gateway",
          "city":"Lilydale",
          "state":"VIC",
          "postcode":"3140",
          "email":"",
          "__v":0,
          "primaryContacts":[
            "Brett Enever"
          ],
          "phoneNumber":[],
          "coordinates":[
            -37.743437,
            145.340579
          ]
        },{  
          "_id":"59743795e834d174405a6574",
          "name":"D A Signs",
          "street":"52 High Street",
          "city":"Wodonga",
          "state":"VIC",
          "postcode":"3690",
          "email":"info@dasigns.com.au",
          "__v":0,
          "primaryContacts":[],
          "phoneNumber":[
            "+61 2 6056 6060"
          ],
          "coordinates":[
            -36.116037,
            146.891318
          ]
        },{  
          "_id":"59747d6948526cb95cafc0cf",
          "name":"Linfox Logistics - New South Wales",
          "street":"Fox Lane",
          "city":"Erskine Park",
          "state":"NSW",
          "postcode":"2759",
          "email":'',
          "__v":0,
          "primaryContacts":[],
          "phoneNumber":[
            "+61 2 8882 5000"
          ],
          "coordinates":[
            -33.812496,
            150.791190
          ]
        },{  
          "_id":"59749d9ac5dee462430ea5ca",
          "name":"Signwave Parramatta",
          "street":"1/35 Foundry Road",
          "city":"Seven Hills",
          "state":"NSW",
          "postcode":"2147",
          "email":"802@signwave.com.au",
          "__v":0,
          "primaryContacts":[],
          "phoneNumber":[
            "+61 2 9630 3044"
          ], 
          "coordinates":[
            -33.770912,
            150.955110
          ]
        },{
          "_id":"59719d405f8ee87150225b9a",
          "name":"COL Alice Springs",
          "street":"Alice Springs S/C Cnr Gregory Tce & Bath St",
          "city":"Alice Springs",
          "state":"NT",
          "postcode":"0870",
          "email":"Coles.0418.Online.Manager@coles.com.au",
          "_v":0,
          "primaryContacts":[  
            "Lisa Morley",
            "Saskia Scott"
          ],
          "phoneNumber":[
            "08 8952 4575"
          ],
          "coordinates":[  
            -23.6982962,
            133.8789453
          ]
        },{  
          "_id":"59719d405f8ee87150225b98",
          "name":"COL Albury",
          "street":"Cnr Townend & Smollet Streets",
          "city":"Albury",
          "state":"VIC",
          "postcode":"2640",
          "email":"Coles.0693.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kylie Koschel",
            "Susan Ward",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 2 6021 7806"
          ],
          "coordinates":[  
            -36.0824321,
            146.9127367
          ]
        },{  
          "_id":"59719d405f8ee87150225b9b",
          "name":"COL Aspley",
          "street":"Albany Creek Road",
          "city":"Aspley",
          "state":"QLD",
          "postcode":"4034",
          "email":"Coles.4670.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Franca Febbo",
            "Alisha Fertjowski",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 36309730"
          ],
          "coordinates":[  
            -27.3627851,
            153.0093107
          ]
        },{  
          "_id":"59719d405f8ee87150225b9c",
          "name":"COL Bacchus Marsh",
          "street":"Bacchus Marsh S/C~ Cnr Main & Young Streets",
          "city":"Bacchus Marsh",
          "state":"VIC",
          "postcode":"3340",
          "email":"Coles.0672.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Alice Dowling",
            "Angela McNeill",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5366 0560"
          ],
          "coordinates":[  
            -37.6762492,
            144.4406627
          ]
        },
        {  
          "_id":"59719d405f8ee87150225b99",
          "name":"COL Alexander Heights",
          "street":"Cnr Mirrabooka Ave & Griffon Way",
          "city":"Alexander Heights",
          "state":"WA",
          "postcode":"6064",
          "email":"Coles.0365.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Susan Vernon",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9343 0099"
          ],
          "coordinates":[  
            -31.8312436,
            115.8529703
          ]
        },
        {  
          "_id":"59719d405f8ee87150225b9d",
          "name":"COL Ballina",
          "street":"Cnr Fox & Kerr Streets",
          "city":"Ballina",
          "state":"NSW",
          "postcode":"2478",
          "email":"Coles.4401.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Lana Dever",
            "Emma Salgram",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6618 5560"
          ],
          "coordinates":[  
            -28.8601634,
            153.5592574
          ]
        },
        {  
          "_id":"59719d405f8ee87150225b9e",
          "name":"COL Banksia Grove",
          "street":"1001 Joondalup Drive~ Cnr Joseph Banks Blvd",
          "city":"Banksia Grove",
          "state":"WA",
          "postcode":"6031",
          "email":"Coles.0260.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Mark Ewing",
            "Jacki Christopher",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9406 2860"
          ],
          "coordinates":[  
            -31.7055863,
            115.8013273
          ]
        },
        {  
          "_id":"59719d405f8ee87150225b9f",
          "name":"COL Bassendean",
          "street":"Cnr West & Guildford Roads",
          "city":"Bassendean",
          "state":"WA",
          "postcode":"6054",
          "email":"Coles.0395.Online.Manager@Coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Rob Chatley",
            "Vicki Jeffery",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9261 5162"
          ],
          "coordinates":[  
            -31.90200059999999,
            115.954267
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba0",
          "name":"COL Bateau Bay",
          "street":"Bay Village S/C~ The Entrance Road",
          "city":"Bateau Bay",
          "state":"NSW",
          "postcode":"2261",
          "email":"Coles.0904.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Carmen Zommers",
            "Rebecca Tout",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4332 0438"
          ],
          "coordinates":[  
            -33.375362,
            151.472421
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba1",
          "name":"COL Beeliar",
          "street":"8  Durin Avenue",
          "city":"Beeliar",
          "state":"WA",
          "postcode":"6164",
          "email":"Coles.0494.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kelly Young",
            "Lee Giles",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 6595 5360"
          ],
          "coordinates":[  
            -32.1280805,
            115.796386
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba2",
          "name":"COL Belmont",
          "street":"Corner Macquarie Street & Edgar Street",
          "city":"Belmont",
          "state":"NSW",
          "postcode":"2280",
          "email":"Coles.0823.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Beryl Hudson",
            "Veronica Mullane",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4945 0213"
          ],
          "coordinates":[  
            -33.035911,
            151.6587183
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba4",
          "name":"COL Benowa",
          "street":"21 Ross Street~ Benowa",
          "city":"Benowa Village",
          "state":"QLD",
          "postcode":"4217",
          "email":"Coles.4390.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kristen Charlton",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5510 7560"
          ],
          "coordinates":[  
            -28.0004672,
            153.3762844
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba3",
          "name":"COL Bendigo",
          "street":"Cnr Myer & Williamson Street",
          "city":"Bendigo",
          "state":"VIC",
          "postcode":"3550",
          "email":"Coles.0638.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Robyn Keefe",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5441 1539"
          ],
          "coordinates":[  
            -36.7614118,
            144.2834838
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba5",
          "name":"COL Bunbury",
          "street":"Cnr Blair & Stevens Streets",
          "city":"Bunbury",
          "state":"WA",
          "postcode":"6230",
          "email":"Coles.0339.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kim McDonough",
            "Vacant",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9791 3975"
          ],
          "coordinates":[  
            -33.3283308,
            115.6407407
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba6",
          "name":"COL Burwood",
          "street":"Westfield Burwood~ 100 Burwood Road",
          "city":"Burwood",
          "state":"NSW",
          "postcode":"2134",
          "email":"",
          "__v":0,
          "primaryContacts":[  

          ],
          "phoneNumber":[  
            ""
          ],
          "coordinates":[  
            -33.874692,
            151.1058779
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba7",
          "name":"COL Byford",
          "street":"20 Abernethy Road",
          "city":"Byford",
          "state":"WA",
          "postcode":"6122",
          "email":"Coles.0263.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Tracey MacMillan",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9532 0960"
          ],
          "coordinates":[  
            -32.21976300000001,
            116.0067963
          ]
        },
        {  
          "_id":"59719d405f8ee87150225baa",
          "name":"COL Cannonvale",
          "street":"Cnr Island Drive & Shute Harbour Road",
          "city":"Cannonvale",
          "state":"QLD",
          "postcode":"4802",
          "email":"Coles.4598.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Anne Ten-Tye",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4948 2789"
          ],
          "coordinates":[  
            -20.2771684,
            148.6992691
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bab",
          "name":"COL Capalaba",
          "street":"Morton Bay Road",
          "city":"Capalaba",
          "state":"QLD",
          "postcode":"4157",
          "email":"Coles.8759.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Sandra Vanderzipp",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3900 3760"
          ],
          "coordinates":[  
            -27.5251651,
            153.1895434
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb0",
          "name":"COL Churchill",
          "street":"Churchill Centre~ 380-408 Churchill Road",
          "city":"Churchill",
          "state":"SA",
          "postcode":"5084",
          "email":"Coles.4972.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Sally-Ann Lehmann",
            "Sue Sandilands",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8360 3860"
          ],
          "coordinates":[  
            -34.865371,
            138.581527
          ]
        },
        {  
          "_id":"59719d405f8ee87150225baf",
          "name":"COL Christies Beach",
          "street":"101 Beach Road",
          "city":"Christies Beach",
          "state":"SA",
          "postcode":"5165",
          "email":"Coles.4933.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Marion Demaria",
            "Jeremy Frannis",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8326 1885"
          ],
          "coordinates":[  
            -35.1382768,
            138.4814555
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bac",
          "name":"COL Carlingford",
          "street":"Cnr Pennant Hills & Carlingford Roads",
          "city":"Carlingford",
          "state":"NSW",
          "postcode":"2118",
          "email":"Coles.0872.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Cathy Arcuri",
            "Julian Seitu",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 9871 2452"
          ],
          "coordinates":[  
            -33.7777204,
            151.0518224
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb4",
          "name":"COL Deer Park",
          "street":"28-72 Neale Road",
          "city":"Deer Park",
          "state":"VIC",
          "postcode":"3023",
          "email":"Coles.7612.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Sally Clough",
            "Mark Cassidy",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9363 9160"
          ],
          "coordinates":[  
            -37.752247,
            144.7774557
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb1",
          "name":"COL Coburg",
          "street":"451/459 Sydney Road",
          "city":"Coburg",
          "state":"VIC",
          "postcode":"3058",
          "email":"Coles.0592.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Virginia Bevilacqua ",
            "Ross James",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9350 1278"
          ],
          "coordinates":[  
            -37.742572,
            144.9661885
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb5",
          "name":"COL Dianella",
          "street":"366 Grand Promenade",
          "city":"Dianella",
          "state":"WA",
          "postcode":"6059",
          "email":"Coles.0256.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Sarah Abraham",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9267 6760"
          ],
          "coordinates":[  
            -31.8963875,
            115.8709342
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba8",
          "name":"COL Caboolture",
          "street":"Caboolture Park S/C~ 60-78 King Street",
          "city":"Caboolture",
          "state":"QLD",
          "postcode":"4510",
          "email":"Coles.4404.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Tracy Bourke",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5499 3787"
          ],
          "coordinates":[  
            -27.0851119,
            152.9490602
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb6",
          "name":"COL Emerald",
          "street":"Cnr Clermont & Opal Streets",
          "city":"Emerald",
          "state":"QLD",
          "postcode":"4720",
          "email":"Coles.4541.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Bec Reynolds",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4980 8100"
          ],
          "coordinates":[  
            -23.5281035,
            148.1630059
          ]
        },
        {  
          "_id":"59719d405f8ee87150225ba9",
          "name":"COL Cairns",
          "street":"274 Mulgrave Road~ Westcourt",
          "city":"Cairns",
          "state":"QLD",
          "postcode":"4870",
          "email":"Coles.4443.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Steven Myatt",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4041 3267"
          ],
          "coordinates":[  
            -16.9331266,
            145.7528037
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bad",
          "name":"COL Casuarina",
          "street":"Cnr Dripstone & Trower Road",
          "city":"Casuarina",
          "state":"NT",
          "postcode":"810",
          "email":"Coles.0404.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Tracey Mciver",
            "Angela Spencer",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8927 6714"
          ],
          "coordinates":[  
            -12.3775136,
            130.8821298
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb9",
          "name":"COL Fletcher",
          "street":"Lot 901 221 Cnr Minmi Road & Churnwood Drive",
          "city":"Fletcher",
          "state":"NSW",
          "postcode":"2287",
          "email":"Coles.0940.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Samantha Cremor",
            "Andrew Lance",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4941 6360"
          ],
          "coordinates":[  
            -32.8776022,
            151.6478367
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bae",
          "name":"COL Casula",
          "street":"Casula Mall Shopping Centre~ Kurrajong Road",
          "city":"Casula",
          "state":"NSW",
          "postcode":"2170",
          "email":"Coles.0908.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Joel Birch ",
            "Sharon Bellamy",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 9602 7855"
          ],
          "coordinates":[  
            -33.948068,
            150.899674
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb2",
          "name":"COL Coburg North ",
          "street":"180 Gaffney Street",
          "city":"Coburg North ",
          "state":"VIC",
          "postcode":"3058",
          "email":"",
          "__v":0,
          "primaryContacts":[  

          ],
          "phoneNumber":[  
            ""
          ],
          "coordinates":[  
            -37.7315464,
            144.9503229
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bba",
          "name":"COL Flinders Square",
          "street":"Flinders Square S/C~ Cnr Wiluna & Flinders Streets",
          "city":"Flinders Square",
          "state":"WA",
          "postcode":"6060",
          "email":"",
          "__v":0,
          "primaryContacts":[  

          ],
          "phoneNumber":[  
            ""
          ],
          "coordinates":[  
            -31.9096951,
            115.8485962
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bbb",
          "name":"COL Fremantle",
          "street":"Cn Cantonement & Goldsborough Street",
          "city":"Fremantle",
          "state":"WA",
          "postcode":"6160",
          "email":"Coles.0342.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Klara Allsopp",
            "Helen McGary",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9430 8319"
          ],
          "coordinates":[  
            -32.0510479,
            115.7482448
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb3",
          "name":"COL Dee Why",
          "street":"Dee Why Plaza~ 36 Howard Ave",
          "city":"Dee Why",
          "state":"NSW",
          "postcode":"2099",
          "email":"Coles.0784.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Lachlan Swinbourne",
            "David Mclean",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "0439 205 340"
          ],
          "coordinates":[  
            -33.7525165,
            151.2891462
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb7",
          "name":"COL Endeavour Hills",
          "street":"Endeavour Hills S/C~  Matthew Flinders Ave",
          "city":"Endeavour Hills",
          "state":"VIC",
          "postcode":"3802",
          "email":"Coles.0651.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Jacinta Sprague",
            "Brenna Bourke",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9700 6952"
          ],
          "coordinates":[  
            -37.976662,
            145.25832
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bbe",
          "name":"COL Glenorchy",
          "street":"387-391 main road Glenorchy",
          "city":"Glenorchy",
          "state":"TAS",
          "postcode":"7010",
          "email":"Coles.7645.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Jessica Henry",
            "Melissa Luttrell",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 3 6274 1436"
          ],
          "coordinates":[  
            -42.832121,
            147.2737168
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bb8",
          "name":"COL Fairfield",
          "street":"Cnr Brougham St & Fairfield Road",
          "city":"Fairfield",
          "state":"QLD",
          "postcode":"4103",
          "email":"Coles.4512.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Lyvia Smith",
            "Lisa Dale",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3214 6560"
          ],
          "coordinates":[  
            -27.508059,
            153.024887
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bbf",
          "name":"COL Gosnells",
          "street":"2160 Albany Hwy",
          "city":"Gosnells",
          "state":"WA",
          "postcode":"6110",
          "email":"Coles.0384.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Amit Malhotra",
            "Nyree Stringer",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9398 1434"
          ],
          "coordinates":[  
            -32.0692618,
            115.999475
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bbc",
          "name":"COL Gawler",
          "street":"Nothern Market S/C~ Cnr Murray & Cowan Streets",
          "city":"Gawler",
          "state":"SA",
          "postcode":"5118",
          "email":"Coles.0444.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Brenton Stone",
            "Casey Greunig",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8522 4792"
          ],
          "coordinates":[  
            -34.5952378,
            138.748433
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc0",
          "name":"COL Greenacre",
          "street":"13-19 Boronia Road",
          "city":"Greenacre",
          "state":"NSW",
          "postcode":"2190",
          "email":"Coles.5792.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Graham Jones",
            "Sose Tupou",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 8709 0460"
          ],
          "coordinates":[  
            -33.9060409,
            151.0561831
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bbd",
          "name":"COL Gladstone",
          "street":"Kim Kora S/C~ Dawson Hwy",
          "city":"Gladstone",
          "state":"QLD",
          "postcode":"4680",
          "email":"Coles.4406.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kirsty Bailey",
            "Kirsty Innes",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4978 6930"
          ],
          "coordinates":[  
            -24.6233337,
            149.7782871
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc1",
          "name":"COL Greenacres",
          "street":"Cnr Muller & Floridale Roads",
          "city":"Greenacres",
          "state":"SA",
          "postcode":"5086",
          "email":"Coles.4948.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Linda Anderson",
            "Tiffany Elliot",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8368 6160"
          ],
          "coordinates":[  
            -34.8702905,
            138.635155
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc3",
          "name":"COL Halls Head",
          "street":"18 Guava Way",
          "city":"Halls Head",
          "state":"WA",
          "postcode":"6210",
          "email":"Coles.0257.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "May Wong",
            "Steven Sizer",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9586 5160"
          ],
          "coordinates":[  
            -32.54814,
            115.70249
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc2",
          "name":"COL Gungahlin",
          "street":"Cnr Hibberson Street & Gungahlin Place",
          "city":"Gungahlin",
          "state":"ACT",
          "postcode":"2912",
          "email":"Coles.0803.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Paul Agresta ",
            "Crystal Cook",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6123 4560"
          ],
          "coordinates":[  
            -35.1855205,
            149.134776
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc4",
          "name":"COL Hastings",
          "street":"Cnr Church & Victoria Streets",
          "city":"Hastings",
          "state":"VIC",
          "postcode":"3915",
          "email":"Coles.0640.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Gayle Gilchrist",
            "Vanessa Sutterby",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5979 3743"
          ],
          "coordinates":[  
            -38.3060029,
            145.186769
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc5",
          "name":"COL Hervey Bay",
          "street":"Bay Central SC 6 Central Ave",
          "city":"Hervey Bay Central",
          "state":"QLD",
          "postcode":"4655",
          "email":"Coles.4529.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Leonie Walker",
            "TBA- New Manager ",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4196 9500"
          ],
          "coordinates":[  
            -25.290103,
            152.835408
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc6",
          "name":"COL Hoppers Crossing",
          "street":"Werribee Plaza SC~ Cnr Derrimut Road & Heath Road",
          "city":"Hoppers Crossing",
          "state":"VIC",
          "postcode":"3029",
          "email":"Coles.0691.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Karen Sutton",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9974 7359"
          ],
          "coordinates":[  
            -37.8769472,
            144.6820022
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc7",
          "name":"COL Kellyville",
          "street":"Wrights Road ",
          "city":"Kellyville",
          "state":"NSW",
          "postcode":"2155",
          "email":"Coles.0883.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Ram Sevani",
            "Scott Bellamy ",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 8818 2160"
          ],
          "coordinates":[  
            -33.7142577,
            150.9730033
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc8",
          "name":"COL Loganholme",
          "street":"Cnr Pacific Highway & Bryants Road",
          "city":"Loganholme",
          "state":"QLD",
          "postcode":"4129",
          "email":"Coles.4407.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Karen Harris",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3801 7260"
          ],
          "coordinates":[  
            -27.663267,
            153.172986
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bc9",
          "name":"COL Mackay",
          "street":"Mt Pleasant SC~ Cnr Malcomson St & Mackay Bucasia Road",
          "city":"Mackay",
          "state":"QLD",
          "postcode":"4740",
          "email":"Coles.4481.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Stacey Brady",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4942 6745"
          ],
          "coordinates":null
        },
        {  
          "_id":"59719d405f8ee87150225bca",
          "name":"COL Maddington",
          "street":"Cnr Attfield St & Olga Road",
          "city":"Maddington",
          "state":"WA",
          "postcode":"6109",
          "email":"Coles.0337.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Sharleen Price",
            "Manni Bahachu",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9452 0163"
          ],
          "coordinates":[  
            -32.0534354,
            115.9818609
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bcb",
          "name":"COL Mandurah",
          "street":"Cnr Pinjarra & Mandurah Roads",
          "city":"Mandurah",
          "state":"WA",
          "postcode":"6210",
          "email":"Coles.0311.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Angie Langford",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9583 5257"
          ],
          "coordinates":[  
            -32.5374401,
            115.7447319
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bcc",
          "name":"COL Mango Hill",
          "street":"1-21 Halpine Drive",
          "city":"Mango Hill",
          "state":"QLD",
          "postcode":"4509",
          "email":"Coles.4436.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Paula Fitzgerald",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3490 3600"
          ],
          "coordinates":[  
            -27.2425629,
            153.0261564
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bcd",
          "name":"COL Maroochydore",
          "street":"Sunshine Plaza S/C Bunro Street",
          "city":"Maroochydore",
          "state":"QLD",
          "postcode":"4558",
          "email":"Coles.4523.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Emm Keslake",
            "Shane Colman",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5409 4260"
          ],
          "coordinates":[  
            -26.64618,
            153.07648
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bce",
          "name":"COL Mirrabooka",
          "street":"Cnr Yirrigan Dr & Ferrier Road",
          "city":"Mirrabooka",
          "state":"WA",
          "postcode":"6061",
          "email":"Coles.0314.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Brad Esselbach",
            "Leonie Ryniker",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9207 3931"
          ],
          "coordinates":[  
            -31.8735486,
            115.8607866
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bcf",
          "name":"COL Mona Vale",
          "street":"10 Park Street",
          "city":"Mona Vale",
          "state":"NSW",
          "postcode":"2103",
          "email":"Coles.0884.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Heidi Schofield",
            "Jessica Hofbauer-Jonas",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 9999 0698"
          ],
          "coordinates":[  
            -33.6759177,
            151.3053635
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd0",
          "name":"COL Morwell",
          "street":"Mid Valley Shopping Centre~ Princes Hwy",
          "city":"Morwell",
          "state":"VIC",
          "postcode":"3841",
          "email":"Coles.7899.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Meagan",
            "Kim",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5135 3692"
          ],
          "coordinates":[  
            -38.2362251,
            146.4305019
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd1",
          "name":"COL Mowbray",
          "street":"385 Invermay Road",
          "city":"Mowbray",
          "state":"TAS",
          "postcode":"7248",
          "email":"Coles.7502.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Beau Ward",
            "Fiona Kerrison",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 3 6324 4760"
          ],
          "coordinates":[  
            -41.4054664,
            147.1315965
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd2",
          "name":"COL Mt Gambier",
          "street":"Cnr James & Elizabeth Streets",
          "city":"Mt Gambier",
          "state":"SA",
          "postcode":"5290",
          "email":"Coles.0433.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Rebecca Bell"
          ],
          "phoneNumber":[  
            "+61 8 8725 6655"
          ],
          "coordinates":[  
            -37.828301,
            140.7761748
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd3",
          "name":"COL Murwillumbah",
          "street":"Cnr Brisbane & Wollumbin Street",
          "city":"Murwillumbah",
          "state":"NSW",
          "postcode":"2484",
          "email":"Coles.4505.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Leonie Pohlmann",
            "Stacey Gamble ",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6672 2634"
          ],
          "coordinates":[  
            -28.3278034,
            153.3959445
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd4",
          "name":"COL Narellan",
          "street":"326 Camden Valley Way Narellan ",
          "city":"Narellan",
          "state":"NSW",
          "postcode":"2567",
          "email":"Coles.5800.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Jessica Nielson",
            "Nicole Hopping ",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 46457160"
          ],
          "coordinates":[  
            -34.0393522,
            150.7367867
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd9",
          "name":"COL Queanbeyan",
          "street":"131 Monaro Street",
          "city":"Queanbeyan",
          "state":"NSW",
          "postcode":"2620",
          "email":"Coles.0820.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Gavin Read",
            "Ruchi Viring",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6124 3660"
          ],
          "coordinates":[  
            -35.3529296,
            149.2353897
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd8",
          "name":"COL Pagewood",
          "street":"East Gardens SC~ Cnr Bunnerong Road & Wentworth Ave",
          "city":"Pagewood",
          "state":"NSW",
          "postcode":"2035",
          "email":"",
          "__v":0,
          "primaryContacts":[  

          ],
          "phoneNumber":[  
            ""
          ],
          "coordinates":[  
            -33.9444798,
            151.2237466
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bde",
          "name":"COL Rockhampton",
          "street":"Rockhampton Fair SC~ Musgrave Street",
          "city":"Rockhampton",
          "state":"QLD",
          "postcode":"4701",
          "email":"Coles.4455.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Rachel Hausler",
            "Rebecca Parr",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4930 8464"
          ],
          "coordinates":[  
            -23.3563744,
            150.5225805
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be3",
          "name":"COL Sebastopol",
          "street":"210 Albert Street",
          "city":"Sebastapol",
          "state":"VIC",
          "postcode":"3356",
          "email":"Coles.0580.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Lyndell Eshuag",
            "Caroline Hughes",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5336 3823"
          ],
          "coordinates":[  
            -37.59927,
            143.8408543
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd5",
          "name":"COL Nerang",
          "street":"Station Street",
          "city":"Nerang",
          "state":"QLD",
          "postcode":"4221",
          "email":"Coles.4501.Online.Manager@Coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Fetu Pama",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5578 3322"
          ],
          "coordinates":[  
            -27.9954048,
            153.3394673
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be8",
          "name":"COL Tamworth",
          "street":"Kathleen Street~ South Tamworth",
          "city":"South Tamworth",
          "state":"NSW",
          "postcode":"2340",
          "email":"Coles.5796.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Louise Ryan",
            "Rebecca Hayes",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6760 1460"
          ],
          "coordinates":[  
            -31.1073823,
            150.9185119
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bda",
          "name":"COL Richmond NSW",
          "street":"271 - 281 Windsor Street",
          "city":"Richmond",
          "state":"NSW",
          "postcode":"2753",
          "email":"Coles.0792.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Michelle Cotter",
            "Nathan Anderson",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4578 0526"
          ],
          "coordinates":[  
            -33.5957025,
            150.7494272
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bdf",
          "name":"COL Rouse Hill",
          "street":"Corner Windsor Road & Whitehart Drive",
          "city":"Rouse Hill",
          "state":"NSW",
          "postcode":"2155",
          "email":"Coles.0924.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Lauren Treloar",
            "Ammie Tremelyn",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 9836 3461"
          ],
          "coordinates":[  
            -33.6937192,
            150.9249421
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be4",
          "name":"COL Shellharbour",
          "street":"Shop 1021~ Shellharbour Square",
          "city":"Shellharbour",
          "state":"NSW",
          "postcode":"2529",
          "email":"Coles.5797.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Elise Woodcock",
            "Morgan Tipping ",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4295 8360"
          ],
          "coordinates":[  
            -34.5646649,
            150.8373007
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd6",
          "name":"COL North Ward",
          "street":"26-28 MITCHELL STREET",
          "city":"North Ward",
          "state":"QLD",
          "postcode":"4810",
          "email":"Coles.4649.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Wendy Warren",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4721 8900"
          ],
          "coordinates":[  
            -19.2526573,
            146.8159387
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be9",
          "name":"COL The Gap",
          "street":"1000 Waterworks Road~ The Gap",
          "city":"The Gap",
          "state":"QLD",
          "postcode":"4061",
          "email":"Coles.4506.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Laura McGee",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3511 1196"
          ],
          "coordinates":[  
            -27.4459006,
            152.952527
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bd7",
          "name":"COL Oakleigh",
          "street":"Cnr Hanover & Portman Streets",
          "city":"Oakleigh",
          "state":"VIC",
          "postcode":"3166",
          "email":"Coles.0645.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Penny Thomas",
            "Grant Fraser",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9568 5803"
          ],
          "coordinates":[  
            -37.9012376,
            145.0901858
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bee",
          "name":"COL Ulverstone",
          "street":"16 Reibey Street",
          "city":"Ulverstone",
          "state":"TAS",
          "postcode":"7315",
          "email":"Coles.7606.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Tammy Maxwell-Bourke",
            "Tammy",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 3 6425 4632"
          ],
          "coordinates":[  
            -41.1571629,
            146.170268
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bdb",
          "name":"COL Richmond VIC",
          "street":"198-200 Swan Street",
          "city":"Richmond South",
          "state":"VIC",
          "postcode":"3121",
          "email":"Coles.0482.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Brenna Bourke",
            "Daniel Wilcox",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 8420 0200"
          ],
          "coordinates":[  
            -37.8256546,
            144.9961881
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bdc",
          "name":"COL Riverlink",
          "street":"Cnr of The Terrace & Downs Streets",
          "city":"Riverlink",
          "state":"QLD",
          "postcode":"4305",
          "email":"Coles.4596.Online.Manager@coles.com.au ",
          "__v":0,
          "primaryContacts":[  
            "Tammy Baird",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3281 3496"
          ],
          "coordinates":[  
            -27.6081327,
            152.7582694
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be1",
          "name":"COL Roxburgh Park",
          "street":"250 Somerton Road",
          "city":"Roxburgh Park",
          "state":"VIC",
          "postcode":"3064",
          "email":"Coles.7703.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Georgina Bailey",
            "Matt",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9303 2660"
          ],
          "coordinates":[  
            -37.639013,
            144.9319631
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf3",
          "name":"COL Westmead",
          "street":"29-33 Darcy Road",
          "city":"Westmead",
          "state":"NSW",
          "postcode":"2145",
          "email":"Coles.0965.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Luke Stubbefield",
            "Richard Go",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 8837 7700"
          ],
          "coordinates":[  
            -33.8039135,
            150.9797223
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be0",
          "name":"COL Roxborough Park",
          "street":"250 Somerton Road",
          "city":"Roxborough Park",
          "state":"VIC",
          "postcode":"3064",
          "email":"Coles.7703.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Georgina Bailey",
            "Matt",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 9303 2660"
          ],
          "coordinates":[  
            -37.639013,
            144.9319631
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be6",
          "name":"COL St Clair",
          "street":"Cheltenham Parade~ Woodville",
          "city":"St Clair",
          "state":"SA",
          "postcode":"5011",
          "email":"Coles.4971.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Richard Dabek",
            "Damien Franyik",
            "Saskia Scott"
          ],
          "phoneNumber":[  
            "+61 8 8413 5260"
          ],
          "coordinates":[  
            -34.8700124,
            138.5287151
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be5",
          "name":"COL Springfield Orion",
          "street":"1 Main Street~ Springfield Lakes",
          "city":"Springfield Orion",
          "state":"QLD",
          "postcode":"4300",
          "email":"Coles.4666.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Nathan Garcia",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3470 3160"
          ],
          "coordinates":[  
            -27.6768575,
            152.9023417
          ]
        },
        {  
          "_id":"59719d405f8ee87150225beb",
          "name":"COL Toormina",
          "street":"Toormina Gardens S/C~ Cnr Minorie Drv & Toormina Road",
          "city":"Toormina",
          "state":"NSW",
          "postcode":"2452",
          "email":"Coles.5682.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Carolyn Herbert",
            "Debbie Miles",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6659 6500"
          ],
          "coordinates":[  
            -30.3532498,
            153.0924922
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bdd",
          "name":"COL Riverton",
          "street":"353-361 High Road",
          "city":"Riverton",
          "state":"WA",
          "postcode":"6147",
          "email":"Coles.0465.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "David Deb",
            "Alexia Sammut"
          ],
          "phoneNumber":[  
            "+61 8 9253 4160"
          ],
          "coordinates":[  
            -32.0392288,
            115.9074894
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bea",
          "name":"COL The Pines",
          "street":"Cnr K.P.McGrath Drive & Guiness Creek Road",
          "city":"The Pines",
          "state":"QLD",
          "postcode":"4221",
          "email":"Coles.4405.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Kim Miles",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5586 4460"
          ],
          "coordinates":[  
            -28.1338957,
            153.468923
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be2",
          "name":"COL Runaway Bay",
          "street":"Cnr Bayview St & Lae Drv",
          "city":"Runaway Bay",
          "state":"QLD",
          "postcode":"4216",
          "email":"Coles.4530.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Paul Hawkey",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 5537 7990"
          ],
          "coordinates":[  
            -27.9137821,
            153.4030862
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf0",
          "name":"COL Wagga Wagga",
          "street":"Sturt Mall S/C~ Cnr Forsyth Street & Baylis Streets",
          "city":"Wagga Wagga",
          "state":"NSW",
          "postcode":"2650",
          "email":"Coles.0704.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Gayle Wood",
            "Barbara Evans",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 6921 1352"
          ],
          "coordinates":[  
            -35.11321,
            147.370851
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bef",
          "name":"COL Vermont South",
          "street":"Vermont South SC~ cnr Burwood Hwy & Hanover Road",
          "city":"Vermont South",
          "state":"VIC",
          "postcode":"3133",
          "email":"Coles.0677.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Sami Abdullah",
            "Andrea Potau",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 8847 4060"
          ],
          "coordinates":[  
            -37.8560565,
            145.1798433
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf5",
          "name":"COL Winston Hills",
          "street":"Caroline Chisolm Drive",
          "city":"Winston Hills",
          "state":"NSW",
          "postcode":"2153",
          "email":"Coles.0843.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Anastasia Tzivanopolous",
            "Kristina Harriss",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 9620 8462"
          ],
          "coordinates":[  
            -33.7757815,
            150.9756227
          ]
        },
        {  
          "_id":"59719d405f8ee87150225be7",
          "name":"COL Sunnybank",
          "street":"Cnr Calam & Compton Roads",
          "city":"Sunnybank Hills",
          "state":"QLD",
          "postcode":"4109",
          "email":"Coles.4671.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Roxane Redfern",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 3712 5660"
          ],
          "coordinates":[  
            -27.6113434,
            153.0543822
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bed",
          "name":"COL Townsville",
          "street":"Cnr Ross River Road & Nathan Street",
          "city":"Aitkenvale",
          "state":"QLD",
          "postcode":"4814",
          "email":"Coles.4494.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Meisha Woodfield",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4779 0655"
          ],
          "coordinates":[  
            -19.2981045,
            146.7616165
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf2",
          "name":"COL West Gosford",
          "street":"West Gosford S/C~ Brisbane Water Drv",
          "city":"West Gosford",
          "state":"NSW",
          "postcode":"2250",
          "email":"Coles.0821.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Adam Wakeling",
            "Jenna Browning",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 4322 2334"
          ],
          "coordinates":[  
            -33.4294601,
            151.3167093
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf4",
          "name":"COL Wilsonton",
          "street":"Erin Street",
          "city":"Wilsonton",
          "state":"QLD",
          "postcode":"4350",
          "email":"Coles.4433.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Clayton Booth",
            "Karissa Staples"
          ],
          "phoneNumber":[  
            "+61 7 4615 1700"
          ],
          "coordinates":[  
            -27.5421112,
            151.9263782
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bec",
          "name":"COL Top Ryde",
          "street":"Cnr Devlin St & Blaxland Road",
          "city":"Top Ryde",
          "state":"NSW",
          "postcode":"2112",
          "email":"Coles.5801.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Filipe Lage",
            "Leticia Boyd",
            "Jayde Hudson (C/T)"
          ],
          "phoneNumber":[  
            "+61 2 88788160"
          ],
          "coordinates":[  
            -33.8120293,
            151.1064609
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf1",
          "name":"COL Waurn Ponds",
          "street":"173-199 Pioneer Road",
          "city":"Waurn Ponds",
          "state":"VIC",
          "postcode":"3216",
          "email":"Coles.7810.Online.Manager@coles.com.au",
          "__v":0,
          "primaryContacts":[  
            "Tracey Allen",
            "Sarah Esselbrugge"
          ],
          "phoneNumber":[  
            "+61 3 5247 3060"
          ],
          "coordinates":[  
            -38.19942289999999,
            144.3197542
          ]
        },
        {  
          "_id":"59719d405f8ee87150225bf6",
          "name":"COL Customer Support Centre",
          "street":"800 Toorak Road",
          "city":"Hawthorn East",
          "state":"VIC",
          "postcode":"3123",
          "email":"",
          "__v":0,
          "primaryContacts":[  

          ],
          "phoneNumber":[  
            ""
          ],
          "coordinates":[  
            -37.8453794,
            145.0479078
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
      './models/location.js',
      './models/project.js',
      './models/service.js',
      './models/task.js'
    ])

    seeder.clearModels([
      'Booking',
      'Company',
      'Job',
      'Location',
      'Project',
      'Service',
      'Task'
    ], function() {

      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
          // throw Error('populate Models failed')
      });
    })
  })
}

module.exports = {
  //Destroy and seed again
  fill: fill
}
