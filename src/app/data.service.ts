import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
    public data = [{'Title': "Break Free",'Album': "Ariana",'Composer':'Grande','ReleasedDate':'2014','Artist':'Jack'
  },
  {'Title': "Shape of you",'Album': "Ed",'Composer':'Sheeran','ReleasedDate':'2017','Artist':'Mack'
  },
  {'Title': "Lush Life",'Album': "Zara",'Composer':'Larsson','ReleasedDate':'2015','Artist':'Michael'
  },
  {'Title': "Head Over Heels",'Album': "Tears for Fears",'Composer':'Alan','ReleasedDate':'1985','Artist':'Walker'
  },
  {'Title': "Cheap Thrills",'Album': "Sia",'Composer':'Mary','ReleasedDate':'2016','Artist':'Mike'
  },
  {'Title': "Just can't get enough",'Album': "The Black",'Composer':'Peas','ReleasedDate':'2014','Artist':'Jim'
  },
  {'Title': "Starboy",'Album': "The Weeknd",'Composer':'Serena','ReleasedDate':'2016','Artist':'Gomez'
  }
]
}
