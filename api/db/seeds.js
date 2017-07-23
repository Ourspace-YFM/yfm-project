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
        }
      ]
    },{
      model: 'Service',
      documents: [
        {
          companyId: '596634c0b925e80783c7721d',
          location: '59719d405f8ee87150225b9a',
          role: 'Client',
          type: 'Install Location',
          description: 'COL Alice Springs'
        },{
          companyId: '596634c0b925e80783c7721d',
          location: '59719d405f8ee87150225b9a',
          role: 'Client',
          type: 'COL Store',
          description: 'COL Alice Springs'
        },{
          companyId: '59719d405f8ee87150225b92',
          location: '',
          role: 'Installer',
          type: 'HQ',
          description: 'LBE Signs'
        },{
          companyId: '597413e439e98c0769da5a65',
          location: '597414fa98a3a71116fe07c1',
          role: 'Installer',
          type: 'HQ',
          description: 'Alice Crash Repairs HQ'
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
          description: 'Nation wide rebrand of all SKN vans with new MasterCard campaign.',
          status: 'Closed',
          priority: true,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '596c52e6cfa78333529928ff',
          clientId: '596634c0b925e80783c7721d',
          name: 'COL fleet reapirs & maintenance',
          type: 'Maintainance',
          description: 'Ongoing nationwide repairs and maintenance of the COL fleet.',
          status: 'Open',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '596c52e6cfa7833352992900',
          clientId: '596634c0b925e80783c7721e',
          name: '\'Ex-PM\' campaign rebrand',
          type: 'Rebrand',
          description: 'Full fleet (7x trucks) rear skin rebrand.',
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
          clientId: '59719d405f8ee87150225b90',
          name: 'Ongoing repairs and maintenance of Myer fleet.',
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
          description: 'New truck setup (Traxx & SAV) in various states for Myer/Linfox.',
          status: 'Closed',
          priority: false,
          startDate: Date.now(),
          endDate: Date.now(),
        },{
          _id: '5972ae520792a1c46ebee7cf',
          clientId: '59719d405f8ee87150225b91',
          name: 'New truck setup',
          type: 'New-build',
          description: 'New truck setup (Traxx-curve) for Onkaparinga Council.',
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
          projectId: '596c52e6cfa78333529928f',
          owner: '59719d405f8ee87150225b98',
          name: 'Reapir 3 vans for COL Albury',
          status: 'Incomplete',
          description: 'Van \'Terry\' (M-CB): Corners; Van \'Meagan\' (M-CB): SKN, FRA repairs; Van \'Jonathon\': SKN, SAV repairs'
        },{
          _id: '596c6c85c5dbc447854c9a60',
          projectId: '596c52e6cfa78333529928f',
          owner: '59719d405f8ee87150225b9a',
          name: 'Repair 2 vans for COL Alice Springs',
          status: 'Incomplete',
          description: 'Van Alicia (H-G2): SKN, FRA repairs; Van Stan (H-G2): SKN, SAV repairs'
        },{
          _id: '596c6c85c5dbc447854c9a62',
          projectId: '596c52e6cfa78333529928fe',
          owner: '59719d405f8ee87150225b99',
          name: 'Rebrand 6x vans for COL Alexandra Heights',
          status: 'Incomplete',
          description: 'MC1 Rebrand of 6x vans: 3x H-G1, 3x M-CB'
        },{
          _id: '596c6c85c5dbc447854c9a5f',
          projectId: '596c52e6cfa7833352992900',
          owner: '596634c0b925e80783c7721d',
          name: 'Rebrand SCS VIC Truck #1',
          status: 'On-hold',
          description: '\'Ex-PM\' rebrand of 1st of 2 VIC trucks - rear SKN only, no SAV.'
        },{
          _id: '596c6c85c5dbc447854c9a61',
          projectId: '5972ae520792a1c46ebee7cf',
          owner: '596634c0b925e80783c7721d',
          name: 'Install FRA & SKN on new 30m3 hard-waste truck',
          status: 'Incomplete',
          description: ' '
         },{
          _id: '5972b18f151a63e4ea041308',
          projectId: '596a093b8b062a980ae4c1dc',
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
          jobId: '5972d38877e3597c6a578c27',
          taskId: ['5973165c71af1a36b66126ef', '5973165c71af1a36b66126f0', '5973165c71af1a36b66126f1', '5973165c71af1a36b66126f2'],
          name: 'D A Signs @ COL Albury - Mon 31 Jull 2017 @ 11AM',
          status: 'Tentative',
          installerConfirmed: false,
          clientConfirmed: false,
          changeRequests: [''], 
          installerId: '',
          locationId: '',
          bookedDate: Date,
          instructions: '',
          attachments: [''],
          actualStartTime: Date,
          actualFinishTime: Date
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
          name: 'Measure and produce diagram of P/S panel01',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f8',
          parentJob: '5972b18f151a63e4ea041308',
          name: 'Measure and produce diagram of D/S panel',
          status: 'Incomplete',
          completed: false
        },{
          _id: '5973165c71af1a36b66126f9',
          parentJob: '5972b18f151a63e4ea041308',
          name: 'Measure and produce diagram of rear panel',
          status: 'Incomplete',
          completed: false
        }
      ]
    },{
      model: 'Location',
      documents: [  
        {
          _id: '597414fa98a3a71116fe07c1',
          name: 'Alice Crash Repairs',
          street: '7 Brown Street',
          city: "Alice Springs",
          state: "NT",
          postcode: "0870",
          email: 'alexi@alicecrashrepairs.com.au',
          __v: 0,
          primaryContacts: ['Alexi Hatzimihail'],
          phoneNumber: ['+61 8 8952 1600'],
          coordinates: [-23.690220, 133.869832]
        },
         {  
               _id: '59719d405f8ee87150225b9a',
               name: 'COL Alice Springs',
               street: 'Alice Springs S/C Cnr Gregory Tce & Bath St',
               city: "Alice Springs",
               state: "NT",
               postcode: "0870",
               email: "Coles.0418.Online.Manager@coles.com.au",
               __v: 0,
               primaryContacts: [  
                        "Lisa Morley",
                        "Saskia Scott"
                     ],
               phoneNumber:[  
                        "08 8952 4575",
                        "10"
                     ],
               coordinates:[  
                        -23.6982962,
                        133.8789453
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b98",
               "name":"COL Albury",
               "street":"Cnr Townend & Smollet Sts",
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
                        "02 6021 7806",
                        "10"
                     ],
               "coordinates":[  
                        -36.0824321,
                        146.9127367
                     ]
            },
         {  
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
                        "07 36309730",
                        "10"
                     ],
               "coordinates":[  
                        -27.3627851,
                        153.0093107
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b9c",
               "name":"Bacchus Marsh",
               "street":"Bacchus Marsh S/C~ Cnr Main & Young Sts",
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
                        "03 5366 0560",
                        "10"
                     ],
               "coordinates":[  
                        -37.6762492,
                        144.4406627
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b99",
               "name":"Alexander Heights",
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
                        "08 9343 0099",
                        "10"
                     ],
               "coordinates":[  
                        -31.8312436,
                        115.8529703
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b9d",
               "name":"Ballina",
               "street":"Cnr Fox & Kerr Sts",
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
                        "02 6618 5560",
                        "10"
                     ],
               "coordinates":[  
                        -28.8601634,
                        153.5592574
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b9e",
               "name":"Banksia Grove",
               "street":"\"1001 Joondalup Drive~ Cnr Joseph Banks Blvd\"",
               "city":"Banksia Grove",
               "state":"WA",
               "postcode":"6031",
               "email":"Coles.0260.online.manager@coles.com.au ",
               "__v":0,
               "primaryContacts":[  
                        "Mark Ewing",
                        "Jacki Christopher",
                        "Alexia Sammut"
                     ],
               "phoneNumber":[  
                        "08 9406 2860",
                        "10"
                     ],
               "coordinates":[  
                        -31.7055863,
                        115.8013273
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225b9f",
               "name":"Bassendean",
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
                        "08 9261 5162",
                        "10"
                     ],
               "coordinates":[  
                        -31.90200059999999,
                        115.954267
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba0",
               "name":"Bateau Bay",
               "street":"\"Bay Village S/C~ The Entrance Rd\"",
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
                        "02 4332 0438",
                        "10"
                     ],
               "coordinates":[  
                        -33.375362,
                        151.472421
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba1",
               "name":"Beeliar",
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
                        "08 6595 5360",
                        "10"
                     ],
               "coordinates":[  
                        -32.1280805,
                        115.796386
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba2",
               "name":"Belmont",
               "street":"Corner Macquarie Street and Edgar Street",
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
                        "02 4945 0213",
                        "10"
                     ],
               "coordinates":[  
                        -33.035911,
                        151.6587183
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba4",
               "name":"Benowa",
               "street":"\"21 Ross Street~ Benowa\"",
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
                        "07 5510 7560",
                        "10"
                     ],
               "coordinates":[  
                        -28.0004672,
                        153.3762844
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba3",
               "name":"Bendigo",
               "street":"Cnr Myer & Williamson St",
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
                        "03 5441 1539",
                        "10"
                     ],
               "coordinates":[  
                        -36.7614118,
                        144.2834838
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba5",
               "name":"Bunbury",
               "street":"Cnr Blair and Stevens Streets",
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
                        "08 9791 3975",
                        "10"
                     ],
               "coordinates":[  
                        -33.3283308,
                        115.6407407
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba6",
               "name":"Burwood",
               "street":"\"Westfield Burwood~ 100 Burwood Rd\"",
               "city":"Burwood",
               "state":"NSW",
               "postcode":"2134",
               "email":"",
               "__v":0,
               "primaryContacts":[  
               
                     ],
               "phoneNumber":[  
                        "",
                        "10"
                     ],
               "coordinates":[  
                        -33.874692,
                        151.1058779
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba7",
               "name":"Byford",
               "street":"20 Abernethy Road",
               "city":"Byford",
               "state":"WA",
               "postcode":"6122",
               "email":"Coles.0263.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Tracey MacMillan",
                        "Alexia Sammut"
                     ],
               "phoneNumber":[  
                        "08 9532 0960",
                        "10"
                     ],
               "coordinates":[  
                        -32.21976300000001,
                        116.0067963
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225baa",
               "name":"Cannonvale",
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
                        "07 4948 2789",
                        "10"
                     ],
               "coordinates":[  
                        -20.2771684,
                        148.6992691
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bab",
               "name":"Capalaba",
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
                        "07 3900 3760",
                        "10"
                     ],
               "coordinates":[  
                        -27.5251651,
                        153.1895434
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb0",
               "name":"Churchill",
               "street":"\"Churchill Centre~ 380-408 Churchill Road\"",
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
                        "08 8360 3860",
                        "10"
                     ],
               "coordinates":[  
                        -34.865371,
                        138.581527
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225baf",
               "name":"Christies Beach",
               "street":"101 Beach Rd",
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
                        "08 8326 1885",
                        "10"
                     ],
               "coordinates":[  
                        -35.1382768,
                        138.4814555
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bac",
               "name":"Carlingford",
               "street":"Cnr Pennant Hills & Carlingford Roads",
               "city":"Carlingford",
               "state":"NSW",
               "postcode":"2118",
               "email":"Coles.0872.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Cathy Arcuri",
                        "Julian Seitu",
                        "Jayde Hudson (C/T)"
                     ],
               "phoneNumber":[  
                        "02 9871 2452",
                        "10"
                     ],
               "coordinates":[  
                        -33.7777204,
                        151.0518224
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb4",
               "name":"Deer Park",
               "street":"\"28-72 Neale Rd\"",
               "city":"Deer Park",
               "state":"VIC",
               "postcode":"3023",
               "email":"coles.7612.Online.Manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Sally Clough",
                        "Mark Cassidy",
                        "Sarah Esselbrugge"
                     ],
               "phoneNumber":[  
                        "03 9363 9160",
                        "10"
                     ],
               "coordinates":[  
                        -37.752247,
                        144.7774557
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb1",
               "name":"Coburg",
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
                        "03 9350 1278",
                        "10"
                     ],
               "coordinates":[  
                        -37.742572,
                        144.9661885
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb5",
               "name":"Dianella",
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
                        "08 9267 6760",
                        "10"
                     ],
               "coordinates":[  
                        -31.8963875,
                        115.8709342
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba8",
               "name":"Caboolture",
               "street":"\"Caboolture Park S/C~ 60-78 King St\"",
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
                        "07 5499 3787",
                        "10"
                     ],
               "coordinates":[  
                        -27.0851119,
                        152.9490602
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb6",
               "name":"Emerald",
               "street":"Cnr Clermont & Opal Sts",
               "city":"Emerald",
               "state":"QLD",
               "postcode":"4720",
               "email":"Coles.4541.online.manager@coles.com.au ",
               "__v":0,
               "primaryContacts":[  
                        "Bec Reynolds",
                        "Karissa Staples"
                     ],
               "phoneNumber":[  
                        "07 4980 8100",
                        "10"
                     ],
               "coordinates":[  
                        -23.5281035,
                        148.1630059
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225ba9",
               "name":"Cairns",
               "street":"\"274 Mulgrave Rd~ Westcourt\"",
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
                        "07 4041 3267",
                        "10"
                     ],
               "coordinates":[  
                        -16.9331266,
                        145.7528037
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bad",
               "name":"Casuarina",
               "street":"Cnr Dripstone & Trower Rd",
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
                        "08 8927 6714",
                        "10"
                     ],
               "coordinates":[  
                        -12.3775136,
                        130.8821298
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb9",
               "name":"Fletcher",
               "street":"Lot 901 221 Cnr Minmi Rd & Churnwood Drive",
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
                        "02 4941 6360",
                        "10"
                     ],
               "coordinates":[  
                        -32.8776022,
                        151.6478367
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bae",
               "name":"Casula",
               "street":"\"Casula Mall Shopping Centre~ Kurrajong Rd\"",
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
                        "02 9602 7855",
                        "10"
                     ],
               "coordinates":[  
                        -33.948068,
                        150.899674
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb2",
               "name":"Coburg North ",
               "street":"180 Gaffney Street",
               "city":"Coburg North ",
               "state":"VIC",
               "postcode":"3058",
               "email":"",
               "__v":0,
               "primaryContacts":[  
               
                     ],
               "phoneNumber":[  
                        "",
                        "10"
                     ],
               "coordinates":[  
                        -37.7315464,
                        144.9503229
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bba",
               "name":"Flinders Square",
               "street":"\"Flinders Square S/C~ Cnr Wiluna & Flinders Sts\"",
               "city":"Flinders Square",
               "state":"WA",
               "postcode":"6060",
               "email":"",
               "__v":0,
               "primaryContacts":[  
               
                     ],
               "phoneNumber":[  
                        "",
                        "10"
                     ],
               "coordinates":[  
                        -31.9096951,
                        115.8485962
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bbb",
               "name":"Fremantle",
               "street":"Cn Cantonement & Goldsborough St",
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
                        "08 9430 8319",
                        "10"
                     ],
               "coordinates":[  
                        -32.0510479,
                        115.7482448
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb3",
               "name":"Dee Why",
               "street":"\"Dee Why Plaza~ 36 Howard Ave\"",
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
                        "0439 205 340",
                        "10"
                     ],
               "coordinates":[  
                        -33.7525165,
                        151.2891462
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb7",
               "name":"Endeavour Hills",
               "street":"\"Endeavour Hills S/C~  Matthew Flinders Ave\"",
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
                        "03 9700 6952",
                        "10"
                     ],
               "coordinates":[  
                        -37.976662,
                        145.25832
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bbe",
               "name":"Glenorchy",
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
                        "03 6274 1436",
                        "10"
                     ],
               "coordinates":[  
                        -42.832121,
                        147.2737168
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bb8",
               "name":"Fairfield",
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
                        "07 3214 6560",
                        "10"
                     ],
               "coordinates":[  
                        -27.508059,
                        153.024887
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bbf",
               "name":"Gosnells",
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
                        "08 9398 1434",
                        "10"
                     ],
               "coordinates":[  
                        -32.0692618,
                        115.999475
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bbc",
               "name":"Gawler",
               "street":"\"Nothern Market S/C~ Cnr Murray & Cowan Sts\"",
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
                        "08 8522 4792",
                        "10"
                     ],
               "coordinates":[  
                        -34.5952378,
                        138.748433
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc0",
               "name":"Greenacre",
               "street":"13-19 Boronia Rd",
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
                        "02 8709 0460",
                        "10"
                     ],
               "coordinates":[  
                        -33.9060409,
                        151.0561831
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bbd",
               "name":"Gladstone",
               "street":"\"Kim Kora S/C~ Dawson Hwy\"",
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
                        "07 4978 6930",
                        "10"
                     ],
               "coordinates":[  
                        -24.6233337,
                        149.7782871
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc1",
               "name":"Greenacres",
               "street":"Cnr Muller & Floridale Rds",
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
                        "08 8368 6160",
                        "10"
                     ],
               "coordinates":[  
                        -34.8702905,
                        138.635155
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc3",
               "name":"Halls Head",
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
                        "08 9586 5160",
                        "10"
                     ],
               "coordinates":[  
                        -32.54814,
                        115.70249
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc2",
               "name":"Gungahlin",
               "street":"Cnr Hibberson Street and Gungahlin Place",
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
                        "(02) 6123 4560",
                        "10"
                     ],
               "coordinates":[  
                        -35.1855205,
                        149.134776
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc4",
               "name":"Hastings",
               "street":"Cnr Church & Victoria Sts",
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
                        "03 5979 3743",
                        "10"
                     ],
               "coordinates":[  
                        -38.3060029,
                        145.186769
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc5",
               "name":"Hervey Bay",
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
                        "07 4196 9500",
                        "10"
                     ],
               "coordinates":[  
                        -25.290103,
                        152.835408
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc6",
               "name":"Hoppers Crossing",
               "street":"\"Werribee Plaza SC~ Cnr Derrimut Rd & Heath Rd\"",
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
                        "03 9974 7359",
                        "10"
                     ],
               "coordinates":[  
                        -37.8769472,
                        144.6820022
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc7",
               "name":"Kellyville",
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
                        "02 8818 2160",
                        "10"
                     ],
               "coordinates":[  
                        -33.7142577,
                        150.9730033
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc8",
               "name":"Loganholme",
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
                        "07 3801 7260",
                        "10"
                     ],
               "coordinates":[  
                        -27.663267,
                        153.172986
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bc9",
               "name":"Mackay",
               "street":"\"Mt Pleasant SC~ Cnr Malcomson St & Mackay Bucasia Rd\"",
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
                        "07 4942 6745",
                        "10"
                     ],
               "coordinates":null
            },
         {  
               "_id":"59719d405f8ee87150225bca",
               "name":"Maddington",
               "street":"Cnr Attfield St & Olga Rd",
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
                        "08 9452 0163",
                        "10"
                     ],
               "coordinates":[  
                        -32.0534354,
                        115.9818609
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bcb",
               "name":"Mandurah",
               "street":"Cnr Pinjarra & Mandurah Rds",
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
                        "08 9583 5257",
                        "10"
                     ],
               "coordinates":[  
                        -32.5374401,
                        115.7447319
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bcc",
               "name":"Mango Hill",
               "street":"1-21 Halpine Drive",
               "city":"Mango Hill",
               "state":"QLD",
               "postcode":"4509",
               "email":"Coles.4436.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Paula Fitzgerald",
                        "Karissa Staples"
                     ],
               "phoneNumber":[  
                        "07 3490 3600",
                        "10"
                     ],
               "coordinates":[  
                        -27.2425629,
                        153.0261564
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bcd",
               "name":"Maroochydore",
               "street":"Sunshine Plaza S/C Bunro St",
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
                        "07 5409 4260",
                        "10"
                     ],
               "coordinates":[  
                        -26.64618,
                        153.07648
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bce",
               "name":"Mirrabooka",
               "street":"Cnr Yirrigan Dr & Ferrier Rd",
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
                        "08 9207 3931",
                        "10"
                     ],
               "coordinates":[  
                        -31.8735486,
                        115.8607866
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bcf",
               "name":"Mona Vale",
               "street":"10 Park Street",
               "city":"Mona Vale",
               "state":"NSW",
               "postcode":"2103",
               "email":"Coles.0884.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Heidi Schofield",
                        "Jessica Hofbauer-Jonas",
                        "Jayde Hudson (C/T)"
                     ],
               "phoneNumber":[  
                        "02 9999 0698",
                        "10"
                     ],
               "coordinates":[  
                        -33.6759177,
                        151.3053635
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd0",
               "name":"Morwell",
               "street":"\"Mid Valley Shopping Centre~ Princes Hwy\"",
               "city":"Morwell",
               "state":"VIC",
               "postcode":"3841",
               "email":"coles.7899.Online.Manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Meagan",
                        "Kim",
                        "Sarah Esselbrugge"
                     ],
               "phoneNumber":[  
                        "03 5135 3692",
                        "10"
                     ],
               "coordinates":[  
                        -38.2362251,
                        146.4305019
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd1",
               "name":"Mowbray",
               "street":"385 Invermay Road",
               "city":"Mowbray",
               "state":"TAS",
               "postcode":"7248",
               "email":"Coles.7502.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Beau Ward",
                        "Fiona Kerrison",
                        "Saskia Scott"
                     ],
               "phoneNumber":[  
                        "03 6324 4760",
                        "10"
                     ],
               "coordinates":[  
                        -41.4054664,
                        147.1315965
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd2",
               "name":"Mt Gambier",
               "street":"Cnr James & Elizabeth Streets",
               "city":"Mt Gambier",
               "state":"SA",
               "postcode":"5290",
               "email":"coles.0433.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Rebecca Bell"
                     ],
               "phoneNumber":[  
                        "08 8725 6655",
                        "10"
                     ],
               "coordinates":[  
                        -37.828301,
                        140.7761748
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd3",
               "name":"Murwillumbah",
               "street":"Cnr Brisbane & Wollumbin St",
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
                        "02 6672 2634",
                        "10"
                     ],
               "coordinates":[  
                        -28.3278034,
                        153.3959445
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd4",
               "name":"Narellan",
               "street":"326 Camden Valley Way Narellan ",
               "city":"Narellan",
               "state":"NSW",
               "postcode":"2567",
               "email":"coles.5800.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Jessica Nielson",
                        "Nicole Hopping ",
                        "Jayde Hudson (C/T)"
                     ],
               "phoneNumber":[  
                        "02 46457160",
                        "10"
                     ],
               "coordinates":[  
                        -34.0393522,
                        150.7367867
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd9",
               "name":"Queanbeyan",
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
                        "02 6124 3660",
                        "10"
                     ],
               "coordinates":[  
                        -35.3529296,
                        149.2353897
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd8",
               "name":"Pagewood",
               "street":"\"East Gardens SC~ Cnr Bunnerong Rd and Wentworth Ave\"",
               "city":"Pagewood",
               "state":"NSW",
               "postcode":"2035",
               "email":"",
               "__v":0,
               "primaryContacts":[  
               
                     ],
               "phoneNumber":[  
                        "",
                        "10"
                     ],
               "coordinates":[  
                        -33.9444798,
                        151.2237466
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bde",
               "name":"Rockhampton",
               "street":"\"Rockhampton Fair SC~ Musgrave St\"",
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
                        "07 4930 8464",
                        "10"
                     ],
               "coordinates":[  
                        -23.3563744,
                        150.5225805
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be3",
               "name":"Sebastopol",
               "street":"210 Albert Street",
               "city":"Sebastapol",
               "state":"VIC",
               "postcode":"3356",
               "email":"Coles.0580.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "Lyndell Eshuag",
                        "Caroline Hughes",
                        "Sarah Esselbrugge"
                     ],
               "phoneNumber":[  
                        "03 5336 3823",
                        "10"
                     ],
               "coordinates":[  
                        -37.59927,
                        143.8408543
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd5",
               "name":"Nerang",
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
                        "07 5578 3322",
                        "10"
                     ],
               "coordinates":[  
                        -27.9954048,
                        153.3394673
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be8",
               "name":"Tamworth",
               "street":"\"Kathleen Street~ South Tamworth\"",
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
                        "02 6760 1460",
                        "10"
                     ],
               "coordinates":[  
                        -31.1073823,
                        150.9185119
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bda",
               "name":"Richmond NSW",
               "street":"271 - 281 Windsor St",
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
                        "02 4578 0526",
                        "10"
                     ],
               "coordinates":[  
                        -33.5957025,
                        150.7494272
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bdf",
               "name":"Rouse Hill",
               "street":"Corner Windsor Rd & Whitehart Drive",
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
                        "02 9836 3461",
                        "10"
                     ],
               "coordinates":[  
                        -33.6937192,
                        150.9249421
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be4",
               "name":"Shellharbour",
               "street":"\"Shop 1021~ Shellharbour Square\"",
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
                        "02 4295 8360",
                        "10"
                     ],
               "coordinates":[  
                        -34.5646649,
                        150.8373007
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd6",
               "name":"North Ward",
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
                        "07 4721 8900",
                        "10"
                     ],
               "coordinates":[  
                        -19.2526573,
                        146.8159387
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be9",
               "name":"The Gap",
               "street":"\"1000 Waterworks Road~ The Gap\"",
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
                        "07 3511 1196",
                        "10"
                     ],
               "coordinates":[  
                        -27.4459006,
                        152.952527
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bd7",
               "name":"Oakleigh",
               "street":"Cnr Hanover & Portman Sts",
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
                        "03 9568 5803",
                        "10"
                     ],
               "coordinates":[  
                        -37.9012376,
                        145.0901858
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bee",
               "name":"Ulverstone",
               "street":"16 Reibey St",
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
                        "03 6425 4632",
                        "10"
                     ],
               "coordinates":[  
                        -41.1571629,
                        146.170268
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bdb",
               "name":"Richmond VIC",
               "street":"198-200 Swan St",
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
                        "03 84200200",
                        "10"
                     ],
               "coordinates":[  
                        -37.8256546,
                        144.9961881
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bdc",
               "name":"Riverlink",
               "street":"Cnr of The Terrace and Downs Sts",
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
                        "07 3281 3496",
                        "10"
                     ],
               "coordinates":[  
                        -27.6081327,
                        152.7582694
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be1",
               "name":"Roxburgh Park",
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
                        "03 9303 2660",
                        "10"
                     ],
               "coordinates":[  
                        -37.639013,
                        144.9319631
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bf3",
               "name":"Westmead",
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
                        "02 8837 7700",
                        "10"
                     ],
               "coordinates":[  
                        -33.8039135,
                        150.9797223
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be0",
               "name":"Roxborough Park",
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
                        "03 9303 2660",
                        "10"
                     ],
               "coordinates":[  
                        -37.639013,
                        144.9319631
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be6",
               "name":"St Clair",
               "street":"\"Cheltenham Parade~ Woodville\"",
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
                        "08 8413 5260",
                        "10"
                     ],
               "coordinates":[  
                        -34.8700124,
                        138.5287151
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be5",
               "name":"Springfield Orion",
               "street":"\"1 Main Street~ Springfield Lakes\"",
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
                        "07 3470 3160",
                        "10"
                     ],
               "coordinates":[  
                        -27.6768575,
                        152.9023417
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225beb",
               "name":"Toormina",
               "street":"\"Toormina Gardens S/C~ Cnr Minorie Drv & Toormina Rd\"",
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
                        "02 6659 6500",
                        "10"
                     ],
               "coordinates":[  
                        -30.3532498,
                        153.0924922
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bdd",
               "name":"Riverton",
               "street":"353-361 High Road",
               "city":"Riverton",
               "state":"WA",
               "postcode":"6147",
               "email":"coles.0465.online.manager@coles.com.au",
               "__v":0,
               "primaryContacts":[  
                        "David Deb",
                        "Alexia Sammut"
                     ],
               "phoneNumber":[  
                        "08 9253 4160",
                        "10"
                     ],
               "coordinates":[  
                        -32.0392288,
                        115.9074894
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bea",
               "name":"The Pines",
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
                        "07 5586 4460",
                        "10"
                     ],
               "coordinates":[  
                        -28.1338957,
                        153.468923
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be2",
               "name":"Runaway Bay",
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
                        "07 5537 7990",
                        "10"
                     ],
               "coordinates":[  
                        -27.9137821,
                        153.4030862
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bf0",
               "name":"Wagga Wagga",
               "street":"\"Sturt Mall S/C~ Cnr Forsyth Street & Baylis Sts\"",
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
                        "02 6921 1352",
                        "10"
                     ],
               "coordinates":[  
                        -35.11321,
                        147.370851
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bef",
               "name":"Vermont South",
               "street":"\"Vermont South SC~ cnr Burwood Hwy and Hanover Rd\"",
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
                        "03 8847 4060",
                        "10"
                     ],
               "coordinates":[  
                        -37.8560565,
                        145.1798433
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225bf5",
               "name":"Winston Hills",
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
                        "02 9620 8462",
                        "10"
                     ],
               "coordinates":[  
                        -33.7757815,
                        150.9756227
                     ]
            },
         {  
               "_id":"59719d405f8ee87150225be7",
               "name":"Sunnybank",
               "street":"Cnr Calam & Compton Rds",
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
                        "07 3712 5660",
                        "10"
                     ],
               "coordinates":[  
                        -27.6113434,
                        153.0543822
                     ]
            },
   {  
         "_id":"59719d405f8ee87150225bed",
         "name":"Townsville",
         "street":"Cnr Ross River Rd & Nathan St",
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
                  "07 4779 0655",
                  "10"
               ],
         "coordinates":[  
                  -19.2981045,
                  146.7616165
               ]
      },
   {  
         "_id":"59719d405f8ee87150225bf2",
         "name":"West Gosford",
         "street":"\"West Gosford S/C~ Brisbane Water Drv\"",
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
                  "02 4322 2334",
                  "10"
               ],
         "coordinates":[  
                  -33.4294601,
                  151.3167093
               ]
      },
   {  
         "_id":"59719d405f8ee87150225bf4",
         "name":"Wilsonton",
         "street":"\"Erin Street~ Wilsonton\"",
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
                  "07 4615 1700",
                  "10"
               ],
         "coordinates":[  
                  -27.5421112,
                  151.9263782
               ]
      },
   {  
         "_id":"59719d405f8ee87150225bec",
         "name":"Top Ryde",
         "street":"Cnr Devlin St & Blaxland Rd",
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
                  "02 88788160",
                  "10"
               ],
         "coordinates":[  
                  -33.8120293,
                  151.1064609
               ]
      },
   {  
         "_id":"59719d405f8ee87150225bf1",
         "name":"Waurn Ponds",
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
                  "03 5247 3060",
                  "10"
               ],
         "coordinates":[  
                  -38.19942289999999,
                  144.3197542
               ]
      },
   {  
         "_id":"59719d405f8ee87150225bf6",
         "name":"Customer Support Centre",
         "street":"800 Toorak Road",
         "city":"Hawthorn East",
         "state":"VIC",
         "postcode":"3123",
         "email":"",
         "__v":0,
         "primaryContacts":[  
         
               ],
         "phoneNumber":[  
                  "",
                  "10"
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
  //Destroy and seed again
  fill: fill
}
