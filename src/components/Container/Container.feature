Feature: Drag and Drop

  Rule: Check drag and drop behavior

    Scenario: DropBoxContainer appearance
      When I load the page
      Then I should see the 'drop box container'

    Scenario Outline: DropBoxContainer data appearance
      When I load the page
      Then I should see the '<dishName>' dish

      Examples:
        | dishName          |
        | Stir-Fried Cat    |
        | Whisker Omelet    |
        | Cat tails         |
        | Delicate cat paws |
        | Wool pancakes     |
        | Cat's minion      |

    Scenario: Drag and drop behavior
      When I drag the 'Stir-Fried Cat' dish from the first table and drop it on the third table with the 'Cat tails' dish
      Then I should see that the first table contains 'Cat tails' dish
      And I should see that the third table contains 'Stir-Fried Cat' dish