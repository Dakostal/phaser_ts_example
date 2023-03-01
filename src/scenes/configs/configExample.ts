class ExampleConfig {
  // TYPES 
  // ---> exampleVar: boolean;

  constructor(exampleVar: boolean) {
    this.exampleVar = exampleVar;
  }

  // FUNCTIONS
  // ---> exampleFunc () {
	return this.exampleVar;
  }
}

export default new ExampleConfig(true);
