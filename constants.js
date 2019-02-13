// Generic fields
const FIELD_NAME = 'name';
const FIELD_PRICE = 'price';
const FIELD_STARS = 'stars';
const FIELD_REVIEWS = 'reviews';
const FIELD_SIZE = 'size';
const FIELD_PRICE_PER_GIG = 'price_per_gig';
const FIELD_SERIES = 'series';
const FIELD_CHIPSET = 'chipset';
const FIELD_TYPE = 'type';

// CPU specific
const FIELD_SPEED = 'speed';
const FIELD_CORES = 'cores';
const FIELD_POWER_NEEDS = 'power_requirements';

// CPU Cooler specific
const FIELD_RPM = 'rpm';
const FIELD_NOISE_LEVEL = 'noise_level';

// Motherboard specific
const FIELD_SOCKET = 'socket';
const FIELD_FORM_FACTOR = 'form_factor';
const FIELD_RAM_SLOTS = 'ram_slots';
const FIELD_MAX_RAM = 'max_ram';

// Memory specific
const FIELD_MODULES = 'modules';

// Hard Drive specific
const FIELD_CACHE = 'cache';

// Power Supply Specific
const FIELD_EFFICIENCY = 'efficiency';
const FIELD_MODULAR = 'modular';

// Case specific
const FIELD_FIVE_INCH = 'five_inch';
const FIELD_THREE_INCH = 'three_inch';
const FIELD_POWER_SUPPLY = 'power_supply';

module.exports = {
    FIELD_NAME,
    FIELD_PRICE,
    FIELD_STARS,
    FIELD_REVIEWS,
    FIELD_SIZE,
    FIELD_PRICE_PER_GIG,
    FIELD_SERIES,
    FIELD_CHIPSET,
    FIELD_TYPE,
    FIELD_SPEED,
    FIELD_CORES,
    FIELD_POWER_NEEDS,
    FIELD_RPM,
    FIELD_NOISE_LEVEL,
    FIELD_SOCKET,
    FIELD_FORM_FACTOR,
    FIELD_RAM_SLOTS,
    FIELD_MAX_RAM,
    FIELD_MODULES,
    FIELD_CACHE,
    FIELD_EFFICIENCY,
    FIELD_MODULAR,
    FIELD_FIVE_INCH,
    FIELD_THREE_INCH,
    FIELD_POWER_SUPPLY,
    cpu: {
        1: FIELD_NAME,
        2: FIELD_SPEED,
        3: FIELD_CORES,
        4: FIELD_POWER_NEEDS,
        5: FIELD_REVIEWS,
        6: FIELD_PRICE,
    },
    cooler: {
        1: FIELD_NAME,
        2: FIELD_RPM,
        3: FIELD_NOISE_LEVEL,
        4: FIELD_REVIEWS,
        5: FIELD_PRICE
    },
    motherboard: {
        1: FIELD_NAME,
        2: FIELD_SOCKET,
        3: FIELD_FORM_FACTOR,
        4: FIELD_RAM_SLOTS,
        5: FIELD_MAX_RAM,
        6: FIELD_REVIEWS,
        7: FIELD_PRICE
    },
    memory: {
        1: FIELD_NAME,
        2: FIELD_SPEED,
        3: FIELD_TYPE,
        5: FIELD_MODULES,
        6: FIELD_SIZE,
        7: FIELD_PRICE_PER_GIG,
        8: FIELD_REVIEWS,
        9: FIELD_PRICE,
    },
    storage: {
        1: FIELD_NAME,
        2: FIELD_SERIES,
        3: FIELD_FORM_FACTOR,
        4: FIELD_TYPE,
        5: FIELD_SIZE,
        6: FIELD_CACHE,
        7: FIELD_PRICE_PER_GIG,
        8: FIELD_REVIEWS,
        9: FIELD_PRICE,
    },
    graphics_card: {
        1: FIELD_NAME,
        2: FIELD_SERIES,
        3: FIELD_CHIPSET,
        4: FIELD_SIZE,
        5: FIELD_SPEED,
        6: FIELD_REVIEWS,
        7: FIELD_PRICE,
    },
    power_supply: {
        1: FIELD_NAME,
        2: FIELD_SERIES,
        3: FIELD_FORM_FACTOR,
        4: FIELD_EFFICIENCY,
        5: FIELD_POWER_NEEDS,
        6: FIELD_MODULAR,
        7: FIELD_REVIEWS,
        8: FIELD_PRICE,
    },
    case: {
        1: FIELD_NAME,
        2: FIELD_TYPE,
        3: FIELD_FIVE_INCH,
        4: FIELD_THREE_INCH,
        5: FIELD_POWER_SUPPLY,
        6: FIELD_REVIEWS,
        7: FIELD_PRICE
    },
    urls: {
        cpu: 'https://pcpartpicker.com/products/cpu/fetch/?xcx=0&mode=list',
        cooler: 'https://pcpartpicker.com/products/cpu-cooler/fetch/?xcx=0&mode=list',
        motherboard: 'https://pcpartpicker.com/products/motherboard/fetch/?xcx=0&mode=list',
        memory: 'https://pcpartpicker.com/products/memory/fetch/?xcx=0&mode=list',
        storage: 'https://pcpartpicker.com/products/internal-hard-drive/fetch/?xcx=0&mode=list',
        graphics_card: 'https://pcpartpicker.com/products/video-card/fetch/?xcx=0&mode=list',
        power_supply: 'https://pcpartpicker.com/products/power-supply/fetch/?xcx=0&mode=list',
        case: 'https://pcpartpicker.com/products/case/fetch/?xcx=0&mode=list'
    }
};
