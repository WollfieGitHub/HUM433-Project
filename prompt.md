User
I'm trying to conceive a game on Ethics in Entrepreneurship. The goal is to have a text-based game where you can make choices on different phases of the entrepreneurship, most of which imply some negative ethical issues or impact. The phases I am using are:
- Chapter 1: Proof of Concept
- Chapter 2: Production of MVP/Validation
- Chapter 3: Fundraising
- Chapter 4: Prototyping/Product development
- Chapter 5: Launch
- Chapter 6: Consolidation
- Chapter 7: Escalation
- Chapter 8: Dominance of the Startup

Can you, first, come up with an (not necessarily realistic, but you can) idea for a startup the player will work on, and then, for each chapter I listed, come up with 3 to 5 choices the player can make ?
For each of the choices the player can make, associate a number of points the player will lose or win in each of the following categories: "Environment impact", "Social impact", "Economic impact". The choices should be relevant to the situation and idea of the startup in the current chapter
Really use all the eight chapters I've listed, it is not a big deal if your answer is long.
The startup should be in the software development sector and should not have "Eco..." in its name
Output your message in the following JSON format:
```json
{
  "startupName": "The name of the startup",
  "startupDescription": "A detailed description of the startup idea",
  "chapters": [
      {
        "chapterId": "The id of the chapter, 1 to 8",
        "chapterDescription": "The status of the player's startup and an introduction to the choice they must now make",
        "choices": [
          { 
            "choiceDescription": "A description of the choice to display for the player",
            "score": {
              "environment": "score for the environment impact",
              "social": "score for the social impact",
              "economic": "score for the economic impact"
            }
          }
          // Other choices...
        ]
      },
      // Other chapters with choices and their scores...
    ]
}
```