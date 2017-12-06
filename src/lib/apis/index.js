module.exports = {
  get '_default'() { return require('./5_1'); },
  // get '_default'() { return require('./6_0'); },
  // get '6.0'() { return require('./6_0'); },
  // get '5.6'() { return require('./5_6'); },
  // get '5.5'() { return require('./5_5'); },
  // get '5.4'() { return require('./5_4'); },
  // get '5.3'() { return require('./5_3'); },
  // get '5.2'() { return require('./5_2'); },
  get '5.1'() { return require('./5_1'); },
  // get '6.x'() { return require('./6_x'); },
  // get 'master'() { return require('./master'); },
};
