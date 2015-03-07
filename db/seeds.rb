require 'faker'

answer = {
  taker_id: 1,
  question_id: 1,
  answer_boolean: false
}

User.create(name:"name", email: "janet@janet.com", password: "test")
User.create(name:"name", email: "ram@ram.com", password: "test")
User.create(name:"name", email: "lucas@lucas.com", password: "test")
User.create(name:"name", email: "yumiko@yumiko.com", password: "test")
User.create(name:"name", email: "richy@richy.com", password: "test")


5.times do 
  Question.create(description: Faker::Lorem.sentence, survey_id: 1)
end 

5.times do 
  Question.create(description: Faker::Lorem.sentence, survey_id: 2)
end 

5.times do 
  Question.create(description: Faker::Lorem.sentence, survey_id: 3)
end 


Answer.create(answer)


Survey.create(title: "Are you a DBC fiend?", creator_id:1)
Survey.create(title: "What kind of Kanye are you?", creator_id:2)
Survey.create(title: "What kind of treeplant would you be?", creator_id:3)
Survey.create(title: "What color post-it notes are correct?", creator_id:4)
Survey.create(title: "Will you ever buy a motorbike?", creator_id:5)
Survey.create(title: "Seriously? you are still reading this?", creator_id:6)
