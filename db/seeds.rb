require 'faker'

survey = {
  title: Faker::Name.title,
  creator_id: 1
}

question = {
  description: Faker::Lorem.sentence,
  survey_id: 1
}

answer = {
  taker_id: 1,
  question_id: 1,
  answer_boolean: false
}

User.create()
Question.create(question)
Answer.create(answer)

10.times do 
  Survey.create(title: Faker::Name.title, creator_id:1)
end