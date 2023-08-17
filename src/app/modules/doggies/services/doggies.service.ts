import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { DoggieModel } from "src/app/core/models/doggie.model";

@Injectable({
    providedIn: 'root'
})
export class DoggiesService {

    retriveData(): Observable<DoggieModel[]> {


        //constructor(private http: HttpClient) {}


        //TODO: this.http.get<DoggieModel[]>(API_PATH)
        let dogsData = [
            {
                id: 1,
                image: "https:\/\/images.dog.ceo\/breeds\/setter-irish\/n02100877_511.jpg",
                description: "Handle every situation like a dog. If you can’t eat it or play with it, just pee on it and walk away.",
                name: "Bacon"
            },
            {
                id: 2,
                image: "https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_4639.jpg",
                description: "Ever consider what our dogs must think of us? I mean, here we come back from a grocery store with the most amazing haul, chicken, pork, half a cow. They must think we are the greatest hunters on earth!",
                name: "Woofer"
            },
            {
                id: 3,
                image: "https:\/\/images.dog.ceo\/breeds\/pointer-german\/n02100236_4084.jpg",
                description: "My cats inspire me daily. They inspire me to get a dog!",
                name: "Algodón"
            },
            {
                id: 4,
                image: "https:\/\/images.dog.ceo\/breeds\/saluki\/n02091831_13536.jpg",
                description: "A dog desires affection more than its dinner. Well – almost.",
                name: "Chewbacca"
            },
            {
                id: 5,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_6437.jpg",
                description: "If you are uncomfortable around my dog, I am happy to lock you in the other room when you come over.”",
                name: "Meatball"
            },
            {
                id: 6,
                image: "https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_2366.jpg",
                description: "A boy can learn a lot from a dog — obedience, loyalty, and the importance of turning around three times before lying down",
                name: "Little Bow Wow"
            },
            {
                id: 7,
                image: "https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_1178.jpg",
                description: "If you are a dog and your owner suggests that you wear a sweater suggest that he wear a tail.",
                name: "Oscar Mayer"
            },
            {
                id: 8,
                image: "https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_1725.jpg",
                description: "If aliens saw us walking our dogs and picking up their poop, who would they think is in charge?",
                name: "McGruff"
            },
            {
                id: 9,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-toy\/n02087046_6029.jpg",
                description: "I don’t think twice about picking up my dog’s poop, but if another dog’s poop is next to it, I think, ‘Eww, dog poop!",
                name: "Taco"
            },
            {
                id: 10,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-scottish\/n02097298_4162.jpg",
                description: "Outside of a dog, a book is a man’s best friend. Inside of a dog it’s too dark to read.",
                name: "Bingo"
            },
            {
                id: 11,
                image: "https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_1697.jpg",
                description: "You can say any foolish thing to a dog, and the dog will give you a look that says, ‘Wow, you’re right! I never would’ve thought of that!",
                name: "Miss Piggy"
            },
            {
                id: 12,
                image: "https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_685.jpg",
                description: "Dogs teach us a very important lesson in life: The mailman is not to be trusted",
                name: "Waffle"
            },
            {
                id: 13,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-norwich\/n02094258_2463.jpg",
                description: "A well trained dog will make no attempt to share your lunch. He will just make you feel so guilty that you cannot enjoy it.",
                name: "Sherlock Bones"
            },
            {
                id: 14,
                image: "https:\/\/images.dog.ceo\/breeds\/newfoundland\/n02111277_6353.jpg",
                description: "You can trust your dog to guard your house but never trust your dog to guard your sandwich.",
                name: "Salvador Dogi"
            },
            {
                id: 15,
                image: "https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_10976.jpg",
                description: "I once decided not to date a guy because he wasn’t excited to meet my dog. I mean, this was like not wanting to meet my mother.",
                name: "Winnie the Pooch"
            },
            {
                id: 16,
                image: "https:\/\/images.dog.ceo\/breeds\/ovcharka-caucasian\/IMG_20190602_204319.jpg",
                description: "Home is where your dog runs to greet you.",
                name: "Dona"
            },
            {
                id: 17,
                image: "https:\/\/images.dog.ceo\/breeds\/segugio-italian\/n02090722_002.jpg",
                description: "The average dog is a nicer person than the average person.",
                name: "Spark Pug"
            },
            {
                id: 18,
                image: "https:\/\/images.dog.ceo\/breeds\/mastiff-english\/1.jpg",
                description: "My dog is worried about the economy because Alpo is up to $3.00 a can. That’s almost $21.00 in dog money.",
                name: "Woofgang Puck"
            },
            {
                id: 19,
                image: "https:\/\/images.dog.ceo\/breeds\/waterdog-spanish\/20180706_194432.jpg",
                description: "If your dog is fat, you aren’t getting enough exercise.",
                name: "Atom"
            },
            {
                id: 20,
                image: "https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_2496.jpg",
                description: "No home decor is complete without dog hair.",
                name: "Marshmallow"
            },
            {
                id: 21,
                image: "https:\/\/images.dog.ceo\/breeds\/cockapoo\/big-eye-ginger.jpg",
                description: "The best therapist has fur and four legs",
                name: "Bullwinkle"
            },
            {
                id: 22,
                image: "https:\/\/images.dog.ceo\/breeds\/redbone\/n02090379_4138.jpg",
                description: "Whoever said you can’t buy happiness forgot about puppies",
                name: "Bubba"
            },
            {
                id: 23,
                image: "https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_16420.jpg",
                description: "Without my dog my wallet would be full my house would be clean but my heart would be empty.",
                name: "Queen Bey"
            },
            {
                id: 24,
                image: "https:\/\/images.dog.ceo\/breeds\/papillon\/n02086910_7301.jpg",
                description: "Nothing in the world is friendlier than a wet dog.",
                name: "The Notorious D.O.G."
            },
            {
                id: 25,
                image: "https:\/\/images.dog.ceo\/breeds\/shihtzu\/n02086240_739.jpg",
                description: "If you want the best seat in the house, you’ll have to move the dog.",
                name: "Elmo"
            },
            {
                id: 26,
                image: "https:\/\/images.dog.ceo\/breeds\/hound-plott\/hhh-23456.jpg",
                description: "Every snack you make, every meal you bake, every bite you take…I’ll be watching you.",
                name: "Mickey"
            },
            {
                id: 27,
                image: "https:\/\/images.dog.ceo\/breeds\/appenzeller\/n02107908_1783.jpg",
                description: "This home is filled with love and dog hair.",
                name: "Minnie"
            },
            {
                id: 28,
                image: "https:\/\/images.dog.ceo\/breeds\/newfoundland\/n02111277_3153.jpg",
                description: "Beware! Dog can’t hold its licker",
                name: "Donkey"
            },
            {
                id: 29,
                image: "https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_5340.jpg",
                description: "Dogs are like potato chips. You can’t have just one.",
                name: "Ferris"
            },
            {
                id: 30,
                image: "https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_13311.jpg",
                description: "Life without a dog is like an unsharpened pencil. It has no point.",
                name: "Dorothy"
            },
            {
                id: 31,
                image: "https:\/\/images.dog.ceo\/breeds\/malamute\/n02110063_14382.jpg",
                description: "What I like most about people is their dogs",
                name: "Boston Beans"
            },
            {
                id: 32,
                image: "https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_4102.jpg",
                description: "Less people, more dogs",
                name: "Katniss"
            },
            {
                id: 33,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_367.jpg",
                description: "Dogs are my favorite people",
                name: "Sansa"
            },
            {
                id: 34,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-australian\/n02096294_3472.jpg",
                description: "The only person who understands me is my dog",
                name: "Grogu"
            },
            {
                id: 35,
                image: "https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_1854.jpg",
                description: "I don’t who care who dies in the movie, as long as the dog lives.",
                name: "Dorothy"
            },
            {
                id: 36,
                image: "https:\/\/images.dog.ceo\/breeds\/terrier-yorkshire\/n02094433_3279.jpg",
                description: "I am one dog short of crazy.",
                name: "Luke Skywalker"
            },
            {
                id: 37,
                image: "https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_4193.jpg",
                description: "If our dog doesn’t like you, we probably won’t either.",
                name: "Dogzila"
            },
            {
                id: 38,
                image: "https:\/\/images.dog.ceo\/breeds\/dalmatian\/cooper2.jpg",
                description: "Choosing a dog may be the only chance you get to pick a relative.",
                name: "Clipper"
            },
            {
                id: 39,
                image: "https:\/\/images.dog.ceo\/breeds\/spaniel-welsh\/n02102177_3295.jpg",
                description: "Leave me alone – I’m only speaking to dogs today.",
                name: "Grits"
            },
            {
                id: 40,
                image: "https:\/\/images.dog.ceo\/breeds\/otterhound\/n02091635_4175.jpg",
                description: "My fashion philosophy is, if you’re not covered in dog hair, your life is empty.",
                name: "Moby Dick"
            },
            {
                id: 41,
                image: "https:\/\/images.dog.ceo\/breeds\/komondor\/n02105505_3723.jpg",
                description: "It’s just the most amazing thing to love a dog, isn’t it? It makes our relationships with people seem as boring as a bowl of oatmeal.",
                name: "Bilbo Baggins"
            },
            {
                id: 42,
                image: "https:\/\/images.dog.ceo\/breeds\/dhole\/n02115913_1233.jpg",
                description: "Some of our greatest historical and artistic treasures we place with curators in museums; others we take for walks.",
                name: "Mac Daddy"
            },
            {
                id: 43,
                image: "https:\/\/images.dog.ceo\/breeds\/retriever-curly\/n02099429_448.jpg",
                description: "The more people I meet, the more I love my dog",
                name: "Austen Powers"
            },
            {
                id: 44,
                image: "https:\/\/images.dog.ceo\/breeds\/mexicanhairless\/n02113978_1551.jpg",
                description: "When I die my dog gets everything",
                name: "Red Ranger"
            },
            {
                id: 45,
                image: "https:\/\/images.dog.ceo\/breeds\/schipperke\/n02104365_5970.jpg",
                description: "A dog is one of the remaining reasons why some people can be persuaded to go for a walk.",
                name: "Bubbles"
            },
            {
                id: 46,
                image: "https:\/\/images.dog.ceo\/breeds\/finnish-lapphund\/mochilamvan.jpg",
                description: "Dogs laugh, but they laugh with their tails",
                name: "Bake McBride"
            },
            {
                id: 47,
                image: "https:\/\/images.dog.ceo\/breeds\/hound-english\/n02089973_1076.jpg",
                description: "Outside of a dog, a book is a man’s best friend. Inside of a dog, it’s too dark to read",
                name: "Chamán"
            },
            {
                id: 48,
                image: "https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_292.jpg",
                description: "If I could be half the person my dog is, I’d be twice the human I am.",
                name: "Ania"
            },
            {
                id: 49,
                image: "https:\/\/images.dog.ceo\/breeds\/otterhound\/n02091635_2464.jpg",
                description: "When an 85-pound mammal licks your tears away, then tries to sit on your lap, it’s hard to feel sad.",
                name: "Maila"
            },
            {
                id: 50,
                image: "https:\/\/images.dog.ceo\/breeds\/retriever-curly\/n02099429_2699.jpg",
                description: "If you think dogs can’t count, try putting three dog biscuits in your pocket and then give him only two of them",
                name: "Calipso"
            }
        ];


        return of(dogsData).pipe(
            delay(2000)
        );

    }
}