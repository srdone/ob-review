import { Injectable } from '@angular/core';
import { FlashCardContent, Category } from './flash-card-content.interface';

@Injectable()
export class FlashCardsDataService {

    private flashCardContent: FlashCardContent[] = [
        {
            category: Category.Teams,
            term: 'Tuckman\'s Stages',
            definition: 'Stages of effective team development: Forming, Storming, Norming, Performing. Effective teams go through all stages and don\'t just stick on one stage.'
        },
        {
            category: Category.Teams,
            term: 'Forming',
            definition: 'Stage of effective team development. Establishing trusting relationships. Groups often skip this.'
        },
        {
            category: Category.Teams,
            term: 'Storming',
            definition: 'Stage of effective team development. Confronting conflict productively. Groups suppress this.'
        },
        {
            category: Category.Teams,
            term: 'Norming',
            definition: 'Stage of effective team development. Establishing clear purpose and rules. Groups do this only implicitly.'
        },
        {
            category: Category.Teams,
            term: 'Performing',
            definition: 'Stage of effective team development. Collaboration and synergy. Groups divide and conquer.'
        },
        {
            category: Category.Teams,
            term: 'Groups vs teams',
            definition: 'A group is comprised of individuals that share common interests or characteristics. A team is a group of diverse individuals that work together for a common goal and share responsibility for the team\'s success.'
        },
        {
            category: Category.Teams,
            term: 'Task-leaders vs relationship leaders',
            definition: 'Task leaders help give direction and move the tasks along. They are necessary for efficient teams. Relationship leaders help maintain a tension-free climate by motivating, energizing, etc.'
        },
        {
            category: Category.Teams,
            term: 'PAL, meetings, and team charters',
            definition: 'Good meeings are your PAL: they have a PURPOSE, they have built in ACCOUNTABILITY, and they have built in LIMITS. Team charters help to define and enforce team norms and rules, they place conditions on team memberships, they are living documents.'
        },
        {
            category: Category.Teams,
            term: 'Midpoint transition meetings',
            definition: ''
        },
        {
            category: Category.Teams,
            term: 'Buddy teams',
            definition: 'Put two or three people on a project. Each complements the other\'s skills and can help compensate for the missing skills of the other. This results in fewer mistakes and shared knowledge.'
        },
        {
            category: Category.Teams,
            term: 'Carrying the pole',
            definition: 'Sometimes team members need to pick up the slack where other team members have difficulty with some skills. Those not carrying the pole should remain engaged.'
        },
        {
            category: Category.Teams,
            term: 'Two sheets and a blanket',
            definition: 'When others around you are struggling, help them to succeed. What matters is the overall perforamnce of the team, not your own performance apart from everyone else\'s'
        },
        {
            category: Category.Personality,
            term: 'The sensitive line',
            definition: 'The point at which people feel they have to defend themselves against information that they feel does not fit with their self-concept'
        },
        {
            category: Category.Personality,
            term: 'Threat-rigidity response',
            definition: 'People become rigid when uncertainty is introduced or they feel threatened. They do this to protect what is comfortable and familiar'
        },
        {
            category: Category.Personality,
            term: 'Tolerance for ambiguity',
            definition: 'Divided into tolerance of novelty, complexity, and insolubility, more ability to tolerate ambiguity results in ability to be flexible and deal with complexity. It can be improved and is not correlated with intelligence'
        },
        {
            category: Category.Personality,
            term: 'Locus of control',
            definition: 'The attitude people have toward how much control they have over their own destinies. Alterable by the individual. Scale of internal to external. Internal locus of control is associated with the most effective managers in the US'
        },
        {
            category: Category.Personality,
            term: 'Core self-evaluation',
            definition: 'The general personality orientation that guides behavior. Overall positive self regard with four components: self esteem, self efficacy, neuroticism, locus of control'
        },
        {
            category: Category.Personality,
            term: 'Self-monitoring behavior',
            definition: 'The tendency to adapt one\'s behavior to the situation. High self monitors are adaptable and sensitive but can be seen as duplicitous. They tend to be less innovative and are more influenced by superficial traits. Low self monitors are authentic and consistent but can be seen as inflexible and insensitive.'
        },
        {
            category: Category.Personality,
            term: 'Big 5 personality traits',
            definition: 'Conscientiousness, Extraversion-intraversion, Agreeableness, Emotional stability, Openness to experience.'
        },
        {
            category: Category.Personality,
            term: 'Conscientiousness (personality trait)',
            definition: 'Responsible and careful. Related to job performance.'
        },
        {
            category: Category.Personality,
            term: 'Extraversion-intraversion (personality trait)',
            definition: 'Expressive vs reserved. Related to performance in sales and management.'
        },
        {
            category: Category.Personality,
            term: 'Agreeableness (personality trait)',
            definition: 'Good natured and cooperative. Unrelated to job performance.'
        },
        {
            category: Category.Personality,
            term: 'Emotional stability (personality trait)',
            definition: 'Nervousness and stress. Unrelated to job performance.'
        },
        {
            category: Category.Personality,
            term: 'Openness to experience (personality trait)',
            definition: 'Imaginative vs conventional. Unrelated to job performance.'
        },
        {
            category: Category.Personality,
            term: 'Instrumental vs Terminal values',
            definition: 'Terminal values are ends oriented: desirable ends or goals for the individual. Instrumental values are means oriented: morality and competence and the methods for attaining and end'
        },
        {
            category: Category.Diversity,
            term: 'Levels of bias',
            definition: 'How good people become discriminatory: Perception of individual traits, Stereotypes - categorizing of perceptions, Prejudice - negative stereotypes, Discrimination - prejudice in action'
        },
        {
            category: Category.Diversity,
            term: 'Implicit association test',
            definition: 'A test that measures a persons automatic association by measuring how long it takes for a user to categorize concepts with an attribute - e.g. "male" or "female" with "logical".'
        },
        {
            category: Category.SupportiveCommunication,
            term: 'Eight attributes of supportive communication',
            definition: 'The eight attributes are Congrucence (message matches feelings), Descriptive (not evaluative), Problem-Oriented (not person-oriented), Validating (exhibit respect), Specific (avoiding generalizing), Conjunctive (relate message to current theme), Owned (take responsibility - use "I"), Listening (lots of reflective responses)'
        },
        {
            category: Category.SupportiveCommunication,
            term: 'Coaching vs Counseling',
            definition: 'Coaching is passing along advice and information and helping others learn something new. It is used for cases of lack of ability, lack of understanding, or incompetence. Counseling is helping others recognize that a problem exists, helping them understand how their attitude matters, and helps them identify ways to address the problem. It is used in cases where problems are attitudes, defensiveness, personality clashes, or problems tied to emotion.'
        },
        {
            category: Category.SupportiveCommunication,
            term: 'Four listening principles',
            definition: 'Reflecting, Probing, Deflecting, Advising'
        },
        {
            category: Category.SupportiveCommunication,
            term: 'Emotional intelligence',
            definition: 'The ability to: 1 - diagnose and recognize your own emotions, 2 - the ability to control your emotions, 3 - the ability to recognize and diagnose the emotions displayed by others, 4 - the ability to respond appropriately to emotional cues.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Dialogue',
            definition: 'The free flow of meaning between people. Lack of dialog creates difficulty with acceptance of decisions and contributes to passive agressive behavior to resist decisions. Good dialogue helps all relevant and accurate information to come out, enabling better decisions.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Pool of shared meaning',
            definition: 'A shared pool of knowledge of where other people in the conversation are coming from so everyone understands each other and better decisions can be made.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Fool\'s Choice',
            definition: 'The false choice we are taught from a young age: that we have to either speak up and make an enemy or suffer in silence and allow a bad choice to be made. The truth is that it is possible to be completely respectful and completely honest and forthright. But we have to start with heart and create safety.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Silence',
            definition: 'One of the poor strategies people turn to in conversation when they do not feel safe. Retreating to silence includes: witholding meaning from the pool, masking (understating or selectively showing true opinions), avoiding (steering away from sensitive subjects), and withdrawing (pulling out of the conversation altogether)'
        },
        {
            category: Category.CrucialConversations,
            term: 'Violence',
            definition: 'One of the poor strategies people turn to in conversation when they do not feel safe. Retreating to violence includes: Controlling: attempting to convince, control, or compel others to your point of view, cutting others off, overstating your facts, speaking in absolutes, changing subjects, using directive questions to control the situation. Labeling: putting labels on people or ideas so we can dismiss them under a general category. Attacking: moved to winning, trying to make the other person suffer.'
        },
        {
            category: Category.CrucialConversations,
            term: 'How to create safety',
            definition: 'We create safety by asking ourselves what we really want and then acting as if that is what we really want. We have to clarify our goals to the other person, make sure our intent is pure - we are not out to judge or harm them, create mutual respect, and find a mutual purpose. We restore mutual respect by apologizing, contrasting, and creating a mutual purpose. We must follow CRIB: Commit to seek mutual purpose, Recognize the purpose behind the strategy, Invent a mutual purpose, and Brainstorm new strategies.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Clever stories',
            definition: 'Stories we tell ourselves to keep us from acknowledging our own sellouts and get us off the hook for treating others with respect. They may or may not match reality. There are three types: victim (it\'s not my fault), villian (it\'s all your fault - often uses labeling), and helpless (there\'s nothing else I can do).'
        },
        {
            category: Category.CrucialConversations,
            term: 'STATE model',
            definition: 'How to be frank yet completely respectful. STATE: Share your facts, Tell your story, Ask for other\'s paths, Talk tentatively, and Encourage testing'
        },
        {
            category: Category.CrucialConversations,
            term: 'AMPP model',
            definition: 'Steps to follow when someone else freaks out and you don\'t know why. Helps to break the barriers and get the conversation going. AMPP: Ask them to tell their story. Mirror - tell them what you are seeing in them. Paraphrase - restate in different words what they said. Prime - a last resort, make a guess as to what they are thinking so they feel more safe to express themselves.'
        },
        {
            category: Category.CrucialConversations,
            term: 'Decision making methods',
            definition: 'Command: where more involvement adds nothing or is not worth it. Consult: decision makers invite input. Vote: used when there is a need for efficiency and all agree to support the outcome. Consensus: talk until everyone honestly agrees to one decision.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Distributive vs Integrative Problems',
            definition: 'Distributive solutions to problems focus on dividing a fixed pie - a "win-lose" solution. Integrative solutions to problems focus on expanding the pie - a "win-win" solution. Many problems that are integrative problems often are solved with distributive solutions because that is the default method people use when managing conflict. All methods for managing conflict except Collaborating are distributive approaches.'
        },
        {
            category: Category.ConflictManagement,
            term: '5 Methods of Managing Conflict',
            definition: 'The five different ways of managing conflict. Each has its place, no one item is the right one for every situation. They can be graphed with one axis representing assertiveness and other representing cooperativeness. They are: Foring, Accomodating, Avoiding, Compromising, and Collaborating. Assertiveness increases in importance as the issue\'s importance increases. Cooperativeness increases in importance as the relationship\'s importance increases.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Forcing',
            definition: 'Satisfying personal needs at the expense of the other person. You feel vindicated, other person feels defeated. Examples: formal authority, bullying, manipulation, etc. High on assertiveness, low on cooperativeness. Use when: it is an emergency, when only one right way exists, when someone is being hurt or being taken advantage of.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Accomodating',
            definition: 'Satisfying other party\'s concerns at the expense of your own. The other person takes advantage of your decreased power and credibility over the long term. It helps you preserve a relationship at the expense of genuine appraisal of the issues. Low on assertiveness, high on cooperativeness. Use when: important to keep harmony or be able to call in a favor later on.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Avoiding',
            definition: 'Neglecting the interests of both parties by sidestepping or postponing. Nothing changes for the better though they may get worse. May reflect inability to handle the emotion of conflict. Low on assertiveness, low on cooperativeness. Use when: small issue, limited time and resources.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Compromising',
            definition: 'Seek partial satisfaction for both parties. Results in gamesmanship and suboptimal solutions. Used for expedient but not necessarily effective solutions (the default when we think a problem is a distributive problem). Middle of the road on assertiveness, middle of the road on cooperativeness. Use when: late in conflict when a partial solution for both parties is better than none.'
        },
        {
            category: Category.ConflictManagement,
            term: 'Collaborating',
            definition: 'When we seek to address the concerns of both parties. The win-win method. When this method is possible, the problem is more likely to be resolved in the best way for all parties. Not always possible. High on assertiveness, high on cooperativeness. Use when: time is not a constraint, organizational support exists, and a win-win solution is possible.'
        }
    ]

    getFlashCardData() {
        return this.flashCardContent;
    }

}