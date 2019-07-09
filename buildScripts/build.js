// this script is reponsible for the bunding of our app for the production
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackconfig  from '../webpack.config.prod';
import chalk from 'chalk';
// for production mode we have to run node in that way

process.env.NODE_ENV = 'production';

console.log(chalk.green('Bundling that generates the minified version process has started this may take a few momments ...'))

webpack(webpackconfig).run((err, stats)=>{
 if (err){ // if say a fetal error ocured stop here
  console.log(chalk.red(err));
  return 1;
 }
 // display some stats to the console  not that  need 
 const jsonStats = stats.toJson();
 
 if(jsonStats.hasErrors){
   return jsonStats.errors.map (error  => console.log(chalk.red(error)))
 }
 if(jsonStats.hasWarnings)
 {
 console.log('webpack generated the folloeing warnings !!!');
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
 }


console.log(`webpack stats: ${stats}`);

// at this point  the buildhas succeeded

console.log(chalk.green('your bulid has been build and added to the distridution directory------ (dist)---'))





return 0;
});
