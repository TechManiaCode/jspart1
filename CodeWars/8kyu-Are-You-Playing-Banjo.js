const areYouPlayingBanjo = name => {
    return (name[0].toUpperCase() ==="R")?
      `${name} plays banjo`:
      `${name} does not play banjo`;
  }

// Sample Tests:
Test.assertEquals(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
Test.assertEquals(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");