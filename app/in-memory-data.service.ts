export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Ultima Solidor' },
      { id: 12, name: 'Bravegaria Oswell' },
      { id: 13, name: 'Linca Atelier' },
      { id: 14, name: 'Lil Debbie' },
      { id: 15, name: 'Gaius Kahn' },
      { id: 16, name: 'Jinxey Royal' },
      { id: 17, name: 'Lord Ambrizo' },
      { id: 18, name: 'Rolo Aristov' },
      { id: 19, name: 'Dante Carthaigh' },
      { id: 20, name: 'Ratfinx Twinkledinks' }
    ];
    return {heroes};
  }
}