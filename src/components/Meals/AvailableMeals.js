import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItems';
import { useEffect } from 'react';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {

  useEffect(async () => {
   await fetch('https://react-meals-30b80-default-rtdb.firebaseio.com/meals.json').then(() => {});
  }, []);
    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
        />
        );

    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
};

export default AvailableMeals;