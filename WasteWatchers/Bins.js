// Bins.js

// Define arrays for eligible items for each bin
const ewasteItems = ['item1', 'item2', 'item3', 'item13'];
const recyclingItems = ['item4', 'item5', 'item6', 'item14'];
const organicsItems = ['item7', 'item8', 'item9', 'item15'];
const landfillItems = ['item10', 'item11', 'item12', 'item16'];

// Detect interactions
const detectInteractions = (item) => {
  if (ewasteItems.includes(item)) {
    // Handle interaction with e-waste bin
    console.log('Interacted with e-waste bin');
  } else if (recyclingItems.includes(item)) {
    // Handle interaction with recycling bin
    console.log('Interacted with recycling bin');
  } else if (organicsItems.includes(item)) {
    // Handle interaction with organics bin
    console.log('Interacted with organics bin');
  } else if (landfillItems.includes(item)) {
    // Handle interaction with landfill bin
    console.log('Interacted with landfill bin');
  } else if (!ewasteItems.includes(item)) {
    // Handle interaction with e-waste bin WHEN USER IS WRONG
    console.log('Interacted with e-waste bin');
  } else if (!recyclingItems.includes(item)) {
    // Handle interaction with recycling bin WHEN USER IS WRONG
    console.log('Interacted with recycling bin');
  } else if (!organicsItems.includes(item)) {
    // Handle interaction with organics bin WHEN USER IS WRONG
    console.log('Interacted with organics bin');
  } else if (!landfillItems.includes(item)) {
    // Handle interaction with landfill bin WHEN USER IS WRONG
    console.log('Interacted with landfill bin');
  }
};

export default detectInteractions;
