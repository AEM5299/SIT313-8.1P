import { name, lorem, image, datatype } from 'faker';

const experts = Array.from({length: 6}, (_, idx) => {
    return {
        id: idx,
        name: name.findName(),
        desc: lorem.lines(datatype.number({ min: 1, max: 5 })),
        rating: datatype.float({ min: 0.0, max: 5.0, precision: 1 }),
        img: image.image()
    }
});

export function getExperts() { return experts; };