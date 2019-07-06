/* this scripts helps us to generate the  api data like as though it were the real api 
and also  offers a randomlised  data thats generated using the faker library 
so our stuff should not point to the actuall API 
yap cn still enjoy the benefits locally of fast reload */


// do some library imports

/*eslint-disbale no console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json , function(err){
 if(err){
  console.log(chalk.red(err));
}else{
  console.log(chalk.green('mock data had abeen generated'));
} 
});
