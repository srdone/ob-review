import { Injectable } from '@angular/core';
import { FlashCardContent } from '../../shared';

@Injectable()
export class FlashCardsDataService {

    private flashCardContent: FlashCardContent[] = [
        {
            category: "Teams",
            test: "Midterm",
            term: 'Tuckman\'s Stages',
            definition: 'Stages of effective team development: Forming, Storming, Norming, Performing. Effective teams go through all stages and don\'t just stick on one stage.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Forming',
            definition: 'Stage of effective team development. Establishing trusting relationships. Groups often skip this.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Storming',
            definition: 'Stage of effective team development. Confronting conflict productively. Groups suppress this.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Norming',
            definition: 'Stage of effective team development. Establishing clear purpose and rules. Groups do this only implicitly.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Performing',
            definition: 'Stage of effective team development. Collaboration and synergy. Groups divide and conquer.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Groups vs teams',
            definition: 'A group is comprised of individuals that share common interests or characteristics. A team is a group of diverse individuals that work together for a common goal and share responsibility for the team\'s success.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Task-leaders vs relationship leaders',
            definition: 'Task leaders help give direction and move the tasks along. They are necessary for efficient teams. Relationship leaders help maintain a tension-free climate by motivating, energizing, etc.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'PAL, meetings, and team charters',
            definition: 'Good meeings are your PAL: they have a PURPOSE, they have built in ACCOUNTABILITY, and they have built in LIMITS. Team charters help to define and enforce team norms and rules, they place conditions on team memberships, they are living documents.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Midpoint transition meetings',
            definition: ''
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Buddy teams',
            definition: 'Put two or three people on a project. Each complements the other\'s skills and can help compensate for the missing skills of the other. This results in fewer mistakes and shared knowledge.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Carrying the pole',
            definition: 'Sometimes team members need to pick up the slack where other team members have difficulty with some skills. Those not carrying the pole should remain engaged.'
        },
        {
            category: "Teams",
            test: "Midterm",
            term: 'Two sheets and a blanket',
            definition: 'When others around you are struggling, help them to succeed. What matters is the overall perforamnce of the team, not your own performance apart from everyone else\'s'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'The sensitive line',
            definition: 'The point at which people feel they have to defend themselves against information that they feel does not fit with their self-concept'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Threat-rigidity response',
            definition: 'People become rigid when uncertainty is introduced or they feel threatened. They do this to protect what is comfortable and familiar'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Tolerance for ambiguity',
            definition: 'Divided into tolerance of novelty, complexity, and insolubility, more ability to tolerate ambiguity results in ability to be flexible and deal with complexity. It can be improved and is not correlated with intelligence'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Locus of control',
            definition: 'The attitude people have toward how much control they have over their own destinies. Alterable by the individual. Scale of internal to external. Internal locus of control is associated with the most effective managers in the US'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Core self-evaluation',
            definition: 'The general personality orientation that guides behavior. Overall positive self regard with four components: self esteem, self efficacy, neuroticism, locus of control'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Self-monitoring behavior',
            definition: 'The tendency to adapt one\'s behavior to the situation. High self monitors are adaptable and sensitive but can be seen as duplicitous. They tend to be less innovative and are more influenced by superficial traits. Low self monitors are authentic and consistent but can be seen as inflexible and insensitive.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Big 5 personality traits',
            definition: 'Conscientiousness, Extraversion-intraversion, Agreeableness, Emotional stability, Openness to experience.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Conscientiousness (personality trait)',
            definition: 'Responsible and careful. Related to job performance.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Extraversion-intraversion (personality trait)',
            definition: 'Expressive vs reserved. Related to performance in sales and management.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Agreeableness (personality trait)',
            definition: 'Good natured and cooperative. Unrelated to job performance.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Emotional stability (personality trait)',
            definition: 'Nervousness and stress. Unrelated to job performance.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Openness to experience (personality trait)',
            definition: 'Imaginative vs conventional. Unrelated to job performance.'
        },
        {
            category: "Personality",
            test: "Midterm",
            term: 'Instrumental vs Terminal values',
            definition: 'Terminal values are ends oriented: desirable ends or goals for the individual. Instrumental values are means oriented: morality and competence and the methods for attaining and end'
        },
        {
            category: "Diversity",
            test: "Midterm",
            term: 'Levels of bias',
            definition: 'How good people become discriminatory: Perception of individual traits, Stereotypes - categorizing of perceptions, Prejudice - negative stereotypes, Discrimination - prejudice in action'
        },
        {
            category: "Diversity",
            test: "Midterm",
            term: 'Implicit association test',
            definition: 'A test that measures a persons automatic association by measuring how long it takes for a user to categorize concepts with an attribute - e.g. "male" or "female" with "logical".'
        },
        {
            category: "Supportive Communication",
            test: "Midterm",
            term: 'Eight attributes of supportive communication',
            definition: 'The eight attributes are Congrucence (message matches feelings), Descriptive (not evaluative), Problem-Oriented (not person-oriented), Validating (exhibit respect), Specific (avoiding generalizing), Conjunctive (relate message to current theme), Owned (take responsibility - use "I"), Listening (lots of reflective responses)'
        },
        {
            category: "Supportive Communication",
            test: "Midterm",
            term: 'Coaching vs Counseling',
            definition: 'Coaching is passing along advice and information and helping others learn something new. It is used for cases of lack of ability, lack of understanding, or incompetence. Counseling is helping others recognize that a problem exists, helping them understand how their attitude matters, and helps them identify ways to address the problem. It is used in cases where problems are attitudes, defensiveness, personality clashes, or problems tied to emotion.'
        },
        {
            category: "Supportive Communication",
            test: "Midterm",
            term: 'Four listening principles',
            definition: 'Reflecting, Probing, Deflecting, Advising'
        },
        {
            category: "Supportive Communication",
            test: "Midterm",
            term: 'Emotional intelligence',
            definition: 'The ability to: 1 - diagnose and recognize your own emotions, 2 - the ability to control your emotions, 3 - the ability to recognize and diagnose the emotions displayed by others, 4 - the ability to respond appropriately to emotional cues.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Dialogue',
            definition: 'The free flow of meaning between people. Lack of dialog creates difficulty with acceptance of decisions and contributes to passive agressive behavior to resist decisions. Good dialogue helps all relevant and accurate information to come out, enabling better decisions.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Pool of shared meaning',
            definition: 'A shared pool of knowledge of where other people in the conversation are coming from so everyone understands each other and better decisions can be made.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Fool\'s Choice',
            definition: 'The false choice we are taught from a young age: that we have to either speak up and make an enemy or suffer in silence and allow a bad choice to be made. The truth is that it is possible to be completely respectful and completely honest and forthright. But we have to start with heart and create safety.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Silence',
            definition: 'One of the poor strategies people turn to in conversation when they do not feel safe. Retreating to silence includes: witholding meaning from the pool, masking (understating or selectively showing true opinions), avoiding (steering away from sensitive subjects), and withdrawing (pulling out of the conversation altogether)'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Violence',
            definition: 'One of the poor strategies people turn to in conversation when they do not feel safe. Retreating to violence includes: Controlling: attempting to convince, control, or compel others to your point of view, cutting others off, overstating your facts, speaking in absolutes, changing subjects, using directive questions to control the situation. Labeling: putting labels on people or ideas so we can dismiss them under a general category. Attacking: moved to winning, trying to make the other person suffer.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'How to create safety',
            definition: 'We create safety by asking ourselves what we really want and then acting as if that is what we really want. We have to clarify our goals to the other person, make sure our intent is pure - we are not out to judge or harm them, create mutual respect, and find a mutual purpose. We restore mutual respect by apologizing, contrasting, and creating a mutual purpose. We must follow CRIB: Commit to seek mutual purpose, Recognize the purpose behind the strategy, Invent a mutual purpose, and Brainstorm new strategies.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Clever stories',
            definition: 'Stories we tell ourselves to keep us from acknowledging our own sellouts and get us off the hook for treating others with respect. They may or may not match reality. There are three types: victim (it\'s not my fault), villian (it\'s all your fault - often uses labeling), and helpless (there\'s nothing else I can do).'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'STATE model',
            definition: 'How to be frank yet completely respectful. STATE: Share your facts, Tell your story, Ask for other\'s paths, Talk tentatively, and Encourage testing'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'AMPP model',
            definition: 'Steps to follow when someone else freaks out and you don\'t know why. Helps to break the barriers and get the conversation going. AMPP: Ask them to tell their story. Mirror - tell them what you are seeing in them. Paraphrase - restate in different words what they said. Prime - a last resort, make a guess as to what they are thinking so they feel more safe to express themselves.'
        },
        {
            category: "Crucial Conversations",
            test: "Midterm",
            term: 'Decision making methods',
            definition: 'Command: where more involvement adds nothing or is not worth it. Consult: decision makers invite input. Vote: used when there is a need for efficiency and all agree to support the outcome. Consensus: talk until everyone honestly agrees to one decision.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Distributive vs Integrative Problems',
            definition: 'Distributive solutions to problems focus on dividing a fixed pie - a "win-lose" solution. Integrative solutions to problems focus on expanding the pie - a "win-win" solution. Many problems that are integrative problems often are solved with distributive solutions because that is the default method people use when managing conflict. All methods for managing conflict except Collaborating are distributive approaches.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: '5 Methods of Managing Conflict',
            definition: 'The five different ways of managing conflict. Each has its place, no one item is the right one for every situation. They can be graphed with one axis representing assertiveness and other representing cooperativeness. They are: Foring, Accomodating, Avoiding, Compromising, and Collaborating. Assertiveness increases in importance as the issue\'s importance increases. Cooperativeness increases in importance as the relationship\'s importance increases.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Forcing',
            definition: 'Satisfying personal needs at the expense of the other person. You feel vindicated, other person feels defeated. Examples: formal authority, bullying, manipulation, etc. High on assertiveness, low on cooperativeness. Use when: it is an emergency, when only one right way exists, when someone is being hurt or being taken advantage of.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Accomodating',
            definition: 'Satisfying other party\'s concerns at the expense of your own. The other person takes advantage of your decreased power and credibility over the long term. It helps you preserve a relationship at the expense of genuine appraisal of the issues. Low on assertiveness, high on cooperativeness. Use when: important to keep harmony or be able to call in a favor later on.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Avoiding',
            definition: 'Neglecting the interests of both parties by sidestepping or postponing. Nothing changes for the better though they may get worse. May reflect inability to handle the emotion of conflict. Low on assertiveness, low on cooperativeness. Use when: small issue, limited time and resources.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Compromising',
            definition: 'Seek partial satisfaction for both parties. Results in gamesmanship and suboptimal solutions. Used for expedient but not necessarily effective solutions (the default when we think a problem is a distributive problem). Middle of the road on assertiveness, middle of the road on cooperativeness. Use when: late in conflict when a partial solution for both parties is better than none.'
        },
        {
            category: "Conflict Management",
            test: "Midterm",
            term: 'Collaborating',
            definition: 'When we seek to address the concerns of both parties. The win-win method. When this method is possible, the problem is more likely to be resolved in the best way for all parties. Not always possible. High on assertiveness, high on cooperativeness. Use when: time is not a constraint, organizational support exists, and a win-win solution is possible.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Fight or Flight',
            definition: 'The initial response of the body to extinguish stress. Effecive stress management seeks to eliminate stressors where possible and mobilize the energy created by remaining stressors.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Alarm',
            definition: 'The first stage reaction to stress. Increase in anxiety, fear, sorrow, or depression. Self correcting if stress is short lived.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Resistance',
            definition: 'The second stage reaction to stress. Body begins to store up excess energy and defense mechanisims predominate. These include: agression, regression, repression, withdrawal, and fixation.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Exhaustion',
            definition: 'Third and final stage reaction to stress. Results in pathological consequences. Stressors overpower or outlast the resiliency capacities of individuals.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Resiliency and Hardiness',
            definition: 'Highly stress resilient personality. Results from feeling in control of one\'s life, feeling committed and involved in work, feeling challenged by new experiences rather than viewing them as a threat to comfort.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Type A Personality',
            definition: 'Set of personality attributes that are correlated with poor response to stress, including anger, impatience, and competitiveness. See table 2.8 on pg 140 of dms for detailed list of characteristics. Based on four dimensions: competitiveness, life imbalance, hostility, impatience.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Type B Personality',
            definition: 'Opposite of Type A personality type. More relaxed, patient, and able to listen without interrupting.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Social Readjustment Scale',
            definition: 'A scale tracking the number of changes individuals experienced over the past 12 months. Higher values correlated with higher probability of stress related illness in the future.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Enactive',
            definition: 'Stress management technique. Take control of your situation by saying no, redesigning work, managing time'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Proactive',
            definition: 'Stress management technique. Increase ability to control by having life balance, exercise, internal locus of control, and commitment and challenge.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Reactive',
            definition: 'Stress management technique. Relaxation techniques, fantasizing.'
        },
        {
            category: "Stress Management",
            test: "Final",
            term: 'Time Management Principles',
            definition: 'Identify values and guiding principles, start with the long view and work back, make time to save time, take control by doing something important but not urgent every day, get the hard stuff done first, use a list and check things off, don\'t let your list rule you. Focus on the important and not urgent.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Four Types of Creativity',
            definition: 'Incubation, Imagination, Improvement, and Investment'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Incubation',
            definition: '"Be Sustainable" type of creativity. A focus on teamwork, involement, coordination, cohesion, empowering people, and building trust. Use when need collective effort, have an empowered workforce, and have a diverse community with strong values.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Imagination',
            definition: '"Be New" type of creativity. A focus on experimentation, exploration, risk taking, transformational ideas, revolutionary thinking, unique visions. Use when need: brand new, breakthrough products, there are emerging markets, and you have resources for experimentation.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Improvement',
            definition: '"Be Better" type of creativity. A focus on incremental improvements, process control, systematic approaches, careful methods, clarifying problems. Use when there is a requirement for quality, safety, and reliability, when high technical specialization is needed, and there is a need for effective standardized processes.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Investment',
            definition: '"Be First" type of creativity. A focus on rapid goal achievement, faster responses than others, competitive approaches, attacking problems directly. Use when you need fast results, are in a competitive environment, and there is an emphasis on the bottom line.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Satisficing',
            definition: ''
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Brainstorming',
            definition: ''
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Conceptual Blocks',
            definition: 'Mental obstacles that constrain the way problems are defined. Some are needed to simply cope with everyday life and prevent information overload. Four types are: Constancy, Commitment, Compression, and Complacency'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Constancy',
            definition: 'Conceptual block characterized by sticking to one way to define a problem.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Commitment',
            definition: 'Conceptual block characterized by settling on a single view and avoiding devation from that view. Stereotyping based on past experiences is one example.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Compression',
            definition: 'Conceptual block characterized by screening out too much relevant data when considering a problem.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Complacency',
            definition: 'Conceptual block characterized by fear, ignorance, insecurity or mental laziness that is biased against thinking and asking questions.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Overcoming Conceptual Blocks',
            definition: 'Can overcome by gathering a lot of information and generating a lot of ideas, coming up with new ways to think of probems (synectics), elaborating on the definition, and reversing the definition.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Synectics',
            definition: 'Way of overcoming conceptual blocks. Forming the definition of a problem, then comparing and contrasing it with other situations that you know more about.'
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Garbage Can Model',
            definition: ''
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Common Knowledge Effect',
            definition: ''
        },
        {
            category: "Creativity",
            test: "Final",
            term: 'Groupthink Symptoms',
            definition: 'Feeling invulnerable, shared stereotypes, rationalization of evidence of poor decisions, feeling morally invulnerable, self-censorship, hushing deviant viewpoints, guarding against disturbing ideas, illusion of unanimity.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Personal Power Sources',
            definition: 'Four personal characteristics that are important sources of power: expertise, personal attraction, effort, and legitimacy.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Expertise',
            definition: 'Source of personal power. Work related knowledge. Equalizer because knowledge can come from many sources. Danger of obsolescence. Accrue power by gaining knowledge.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Personal Attraction',
            definition: 'Source of personal power. Charisma, agreeable behavior, fair physical characteristics.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Effort',
            definition: 'Source of personal power. Known as a person who will do whatever it takes.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Legitimacy',
            definition: 'Source of personal power. Person\'s actions are congruent with the prevailing value system. Vigilant in defending core organization values. Conformity to symbolic practices that show support for organization goals. Trusworthiness from two factors: will they do what they say they will, can they do what they say they will.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Position Power Sources',
            definition: 'Centrality, Flexibility, Visibility, Relevance'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Centrality',
            definition: 'Source of position power. Comes from creating networks. Allows you to satisfy the information needs of others. Both horizontal and vertical networks. One of the biggest mistakes is to become isolated.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Flexibility',
            definition: 'Source of position power. Freedom to exercise one\'s judgement, jobs with less routine have less flexibility, flexibility gives more opportunities to gain power.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Visibility',
            definition: 'Source of position power. Excellent performance that is visible results in promotion. To increase power, increase the number of influential people with whom you regularly interact. One good source is presenting in meetings.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Relevance',
            definition: 'Source of position power. Perform activities that are directly related to central issues at the company. The role of trainer and mentor is a powerful position.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Three Influence Strategies',
            definition: 'Retribution, Reciprocity, Reason'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Retribution',
            definition: 'A strategy of influence. Uses personal threats, denial of rewards, punishment, peer pressure, intimidation. Exploits subordinates desire to avoid unpleasantness. Ignores rights and fairness.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Reciprocity',
            definition: 'A strategy of influence. Satisfies self interest of both parties. Includes bargaining, ingratiation. Honors rights and fairness. Makes outcomes desired by manager seem desirable and attractive.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Reason',
            definition: 'A strategy of influence. Argument that someone should do something because of the inherent merits of the request. Helping others see why your ideas make sense. Relies on facts and needs to be compelling. Appeals to personal values or goals. Those who use are rated as highly effective by their bosses.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Effects of Power - Self-Interested vs Social Responsibilty Individuals',
            definition: 'People with a self-interested orientation take on less work for themselves when the have more power. Individuals with a social responsibily orientation increase the work they take on when they have more power.'
        },
        {
            category: "Power and Influence",
            test: "Final",
            term: 'Network Concepts',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Five Tools for Addressing Ability Problems',
            definition: 'Resupply, Retrain, Refit, Reassign, Release'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Resupply',
            definition: 'Tool for addressing ability problems. Providing personnel, budget, clout and other resources that may have been lacking.'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Retrain',
            definition: 'Tool for addressing ability problems. Technical skills quickly become obsolete, so retraining in the new skills needed can address ability problems.'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Refit',
            definition: 'Tool for addressing ability problems. Use others to assist the person in areas where their ability may be lacking (?).'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Reassign',
            definition: 'Tool for addressing ability problems. Put the employee in a position that is more in line with their abilities and skills.'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Release',
            definition: 'Tool for addressing ability problems. Firing the person after all other tools have failed to fix the ability problems. Avoiding this step in order to protect the person is often counterproductive.'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Motivation vs Mobilization',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Strategies for Shaping Behavior',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Expectancy Theory and Modern Counterpart',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Goal Setting',
            definition: 'Good goal setting involves identifying a goal or objective, identifying specific activities and behaviors to accomplish it, establishing accountability and reporting mechanisms, and establishing an evaluation and reward system.'
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Job, Career, and Calling Orientation',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Beneficiary Contact Technique',
            definition: ''
        },
        {
            category: "Motivation",
            test: "Final",
            term: 'Self-Persuasion Intervention',
            definition: ''
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Five Dimensions of Empowerment',
            definition: 'Self-Efficacy, Self-Determination, Personal Consequence, Meaning, Trust'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Self-Efficacy',
            definition: 'A dimension of empowerment. The feeling that one posesses the capability and competence to perform a task successfully. Empowered people feel competent and confident they can perform adequately. Perhaps the most important element in empowerment.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Self-Determination',
            definition: 'A dimension of empowerment. The feeling that one has a choice. People feel self determined when they can voluntarily and intentionally involve themselves in tasks rather than being forced. This gives a sense of freedom and responsibility. They can try out new ideas. Reduces levels of alienation, increases work peformance and innovation, reduces job strain.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Personal Consequence',
            definition: 'A dimension of empowerment. A sense that when one acts, they can produce a result. They do not believe that obstacles in the external environment control their actions. Instead of being reactive, they try to maintain command over what they see.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Meaning',
            definition: 'A dimension of empowerment. Valuing the purpose or goals of the activity in which they are engaged. Their own ideals and standards are peceived as consistent with what they are doing.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Trust',
            definition: 'A dimension of empowerment. Confidence one will be treated fairly and equitably. They feel that even if they are in subordinate positions, the ultimate outcome will be justice and goodness vs harm or damage. Confidence those in authority will not harm or injure. Trust means having a sense of personal security. They place themselves in a position of vulnerability and have faith that, ultimately, no harm will come to them as a result of that trust. People with this trust are more likely to be honest, open, and congruent rather than deceptive or shallow. More self-assured and willing to learn.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: '"Gospel Empowerment" - Agency and Accountability',
            definition: ''
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'When to Delegate',
            definition: 'There are five questions to ask to know when to delegate: Do subordinates have the necessary information or expertise? Is the commitment of subordinates critical to successful implementation? Will subordinates\'s capabilities be expanded by the assignment? Do subordinates share with management and with each other common values and perspectives? Is there sufficient time to delegate effectively?'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'How to Delegate Effectively',
            definition: '10 principles: begin with the end in mind, delegate completely and be clear about expectations, allow participation in delegation, establish parity between authority and responsibility, work within the organizational structure, provide adequate support, focus accounability on results not methods, delegate consistently, avoid upward delegation, clarify consequences of accomplishment.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'Avoiding Upward Delegation',
            definition: 'Upward delegation is when a subordinate comes to you with a question and instead of helping them answer it themselves, you take responsibility to get back to them. Doing so puts the delegated task back into your responsibilities.'
        },
        {
            category: "Empowerment",
            test: "Final",
            term: 'To Whom to Delegate?',
            definition: 'The most participative and empowering alternative is to delegate work to a team and then participate as an equal member of the team.'
        },
        {
            category: "Calling",
            test: "Final",
            term: 'Passion',
            definition: 'An intense desire to pursue a particular activity or interest. Hardwiring, or a feeling you are naturally predisposed to do some things and not others, creates a sense of passion. All about spiritual gifts, which are sometimes very pronounced. Something inside of you you feel compelled to express.'
        },
        {
            category: "Calling",
            test: "Final",
            term: 'Purpose',
            definition: 'A feeling of being drawn to a cause. May not even care how they contribute to it, as long as they can be involved. Something outside of you that becons you to help.'
        },
        {
            category: "Calling",
            test: "Final",
            term: 'Place',
            definition: 'A feeling that you are where you are supposed to be, whether you know why you are there or not. You feel drawn, spiritually and emotionally, to a particular location or setting.'
        }
    ]

    getFlashCardData() {
        return this.flashCardContent;
    }

}