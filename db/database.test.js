const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create person1', async () => {
    expect.assertions(1);
    const person = await db.Person.create({
        id: 1,
        firstName: 'Bobbie',
        lastName: 'Draper'
    });
    expect(person.id).toEqual(1);
});

test('create person2', async () => {
    expect.assertions(1);
    const person = await db.Person.create({
        id: 12,
        firstName: 'Joe',
        lastName: 'Bloggs'
    });
    expect(person.id).toEqual(12);
});

test('get person1', async () => {
    expect.assertions(2);
    const person = await db.Person.findByPk(1);
    expect(person.firstName).toEqual('Bobbie');
    expect(person.lastName).toEqual('Draper');
});

test('delete person1', async () => {
    expect.assertions(1);
    await db.Person.destroy({
        where: {
            id: 1
        }
    });
    const person = await db.Person.findByPk(1);
    expect(person).toBeNull();
});

test('get person2', async () => {
    const person = await db.Person.findByPk(12);
    expect(person.firstName).toEqual('Joe');
    expect(person.lastName).toEqual('Bloggs');
    expect(person.id).toEqual(12);
});

afterAll(async () => {
    await db.sequelize.close();
});