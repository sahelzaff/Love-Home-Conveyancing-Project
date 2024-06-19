import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import '../../Homepage.css';

// Sample posts data
const posts = [
  {
    id: 1,
    date: '15 Mar',
    imageUrl: assets.Blog1,
    title: 'Apartment purchases: use this guide to obtain the essential reports',
    content: `
      <p>Your finance is ready, you’ve done your market research and been inspecting properties for months. And now, you’ve found your dream home and it’s time to think about placing your offer.</p>

<p>But there’s one final hurdle: obtaining the reports needed to make the purchase a seamless one. Are they really necessary, though? Or are they just an extra expense at a time when your budget is already tight?</p>

<p>At Love Homes Conveyancing, we’ve taken a deep dive into all you need to know about obtaining essential reports for your apartment purchase – including pest reports, strata reports, building reports, and just how important they are.</p>

<h2>Understanding the key reports associated with purchasing</h2>

<p>There’s a few different reports that you’ll need to obtain when it comes to purchasing an apartment. Here’s the essential information you need to get all your ducks in a row:</p>

<h3>Building report</h3>

<p>A building report is a visual inspection of the property for the purpose of identifying any major defects and safety issues.</p>

<p>When purchasing an apartment, however, this inspection is limited. A building inspector will usually only be able to access the apartment itself, along with the common areas of the building. They can’t access what’s above and below the apartment in most cases.</p>

<p>This is helpful, especially in top floor apartments where roof leaks can affect the property, or ground floor apartments in smaller, older blocks with wooden floors, in the case of termite risk.</p>

<p>However, if you’re purchasing a brand new apartment? Your inspector may recommend you wait a while. New buildings often have “defined effects periods” of 13 weeks, to allow you to discover more obvious defects that’ll come to light in day-to-day living. But, at the end of this period, an inspector will go on to identify defects that weren’t obvious so they can be lodged together, and the inspector can also assess the cause of more obvious defects.</p>

<h3>Pest report</h3>

<p>Pest inspections are essential to ensure that the property is free from pest infestations or damage from pests. Many inspection companies will offer building and pest reports as a combined service, but don’t forget to check if this service is covered, regardless of whether it’s a combined service or not.</p>

<p>Pest reports don’t just ensure that the building itself will be safe from these issues, it also puts into consideration health and safety risks associated with the dwelling. No one wants rats or mice in the walls!</p>

<h3>Strata report</h3>

<p>While your building report and pest report are essential when purchasing a new apartment, a strata report is a crucial step to take before buying. Unlike building reports – which can only look at the individual apartment and common areas themselves – a strata report will cover everything not included in the previous reports.</p>

<p>It’s like the puzzle piece that puts the entire picture together. You’ll get insight into the building’s history, the financial status, pending building works, special levies, past works history and all the expenses for the last two years.</p>

<p>The strata report contains all building defects relating to the building itself, outside of the apartment. It’s the responsibility of the owner corporation to fix, but no one wants to buy an apartment in a building with a number of issues – especially when you’ll likely have to split part of the funding for these resolutions.</p>

<p>This is normally done by getting a Strata Records Inspection report. But, unlike other reports, it’s not usually an inspection itself but obtaining the strata records held by the “strata manager”.</p>

<p>A qualified “strata searcher” can help you get all the information in one place, and is the best bet in ensuring that you’re getting exactly what you need. While you may be tempted to obtain this on your own, we definitely recommend looking for a qualified searcher to make the process seamless.</p>

<h4>Important things to look out for in your Strata Inspection Report</h4>

<p>When it comes to your strata report specifically, you’ll need to be thorough to ensure you’re obtaining the essential information within your report. Not all strata managers will be as concerned with passing on the details as you are receiving them. Whether they’re just unorganised, or actually try to withhold vital information to preserve property values, it’s important to review your report carefully to ensure you know what’s missing.</p>

<p>Here are the just a few areas you need to pay special attention to:</p>

<ul>
  <li><strong>Financial records</strong> – is there enough money to run the building, cover ongoing maintenance and one-off costs that may come up? Check all levies to see how they’re being spent.</li>
  <li><strong>Disputes</strong> – is there any evidence of disputes between residents and the corporation? You’ll want to know if there’s any pesky issues that may make living uncomfortable.</li>
  <li><strong>Building defects</strong> – keep a VERY close eye out for any defects. You can’t see into the future, but these past records can be a really clear indication of what’s to come.</li>
  <li><strong>Compliance with ALL legislation</strong></li>
  <li><strong>Poor strata management</strong> – can you trust the strata manager to probably stay on top of all strata reports and financials?</li>
</ul>

<p>If there are any gaps? Don’t hesitate to follow up for more information. It’s your livelihood that’s going into this purchase, meaning you’re fully entitled to request the full picture before you make any leaps.</p>

<h2>The risks of skipping essential reports</h2>

<p>When you’re already putting your budget into purchasing a new apartment, it can feel tempting to skip out on some of the upfront costs of obtaining reports. Hiring someone for inspections, completing all that paperwork, and having to dig into all the nitty-gritty details some strata managers don’t want found can feel overwhelming.</p>

<p>But when you skip reports, you’re putting yourself at major risk of not only stress, overwhelm, and nasty surprises – but a lot of financial strain in the long run.</p>

<p>You may look at the apartment and think “looks good to me” but the worry isn’t really in the tiny surface damages or stained walls. It’s in the structural faults that can go completely unnoticed to the untrained eye, and can cause a lot more stress.</p>

<p>Think about it like this – you could save $500 skipping just one inspection. You settle into your new apartment, decorate it just how you want. And for a few years, things are bliss.</p>

<p>Until you receive a notice from body corporate letting you know that their levies will increase to around $60 more a week. Why? Because the builder took some shortcuts and the warranty insurance period expired. Every owner in the complex now has to chip in, in order to get on top of things.</p>

<p>Your reports would have picked up on some of these issues. And, while $500 or so sounds like a lot now … it’s only 9 weeks of paying an updated levy of $60.</p>

<h2>Final thoughts</h2>

<p>Use this guide when obtaining the essential reports for your apartment purchase. Hopefully, this’ll help you clear the air on report confusion, and explain exactly why reports such as your building, pest, and strata report are so crucial before taking your next steps.</p>

<p>If you need any support in this process, don’t hesitate to contact Love Homes Conveyancing for conveyancing made easy. We offer a fresh approach to buying and selling, with professional and forward thinking so you can leave the hassle to us and focus on what really matters.</p>

<p>Like falling in love with your new apartment!</p>

<h2>FAQs</h2>

<h3>What actually is strata?</h3>

<p>Strata schemes allow individuals to become the shared owners of a property. So, when you buy an apartment, you also become part-owner of the common areas surrounding your apartment.</p>

<h3>How much does a strata report cost?</h3>

<p>A complete strata report usually costs around $250-$300, and is a worthy investment before making your leap into apartment purchase. However, quite often agents will organise for a strata report to be available to all prospective purchasers at the outset, in which case expect to pay around $50 and then a further amount if you are the successful purchaser.</p>

<h3>How long does a strata report take?</h3>

<p>If the agent or vendor have not made a Strata report available with the contract, then you will need to order your own. This usually takes 3-5 business days or more if there are delays. It all depends on the time for the searcher to do the work with the manager and obtain the necessary documents.</p>

    `,
  },
  // Other posts...
];

// CommentBox component
const CommentBox = ({ postId }) => {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(`comments-${postId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleCommentSubmit = () => {
    if (name.trim() && text.trim()) {
      const newComment = {
        id: comments.length + 1,
        name,
        text,
        replies: [],
      };
      setComments([...comments, newComment]);
      setName('');
      setText('');
    }
  };

  const handleReply = (commentId, replyText) => {
    const newComments = comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, { name: 'Admin', text: replyText }],
        };
      }
      return comment;
    });
    setComments(newComments);
  };

  return (
    <div className="p-4 rounded-lg mt-10 w-4/5">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      ></textarea>
      <button onClick={handleCommentSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Post Comment
      </button>
      <div className="mt-4">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
};

// Comment component
const Comment = ({ comment, onReply }) => {
  const [reply, setReply] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = () => {
    if (reply.trim()) {
      onReply(comment.id, reply);
      setReply('');
      setShowReplyBox(false);
    }
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
        <div>
          <h4 className="font-bold">{comment.name}</h4>
          <p>{comment.text}</p>
        </div>
      </div>
      <button onClick={() => setShowReplyBox(!showReplyBox)} className="text-black hover:text-[#f0532d] hover:underline font-medium">Reply</button>
      {showReplyBox && (
        <div className="mt-2">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write a reply..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button onClick={handleReplySubmit} className="mt-2 px-4 py-2 bg-[#f0532d] hover:bg-orange-600 text-white font-bold rounded-lg">
            Post Reply
          </button>
        </div>
      )}
      {comment.replies.map((reply, index) => (
        <div key={index} className="mt-4 ml-8 p-4 border border-gray-300 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <div>
              <h4 className="font-bold">{reply.name}</h4>
              <p>{reply.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// BlogDetails component
const BlogDetails = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="p-4 h-auto w-full font-inter pt-20">
      <div>
        <div className="flex flex-row justify-between gap-[1rem] items-start content ">
          <div className="flex flex-row items-center w-[68%] h-auto">
            <div className="max-w-4xl w-full">
              <h2 className="text-sm font-bold text-[#19345E]">ARTICLES</h2>
              <div>
                <h1 className="text-4xl font-bold my-4 w-full">{post.title}</h1>
                <div className="w-[5rem] h-[0.25rem] bg-[#19345E] mb-3 rounded-lg"></div>
                <p className="text-black font-[900] text-xs">POSTED ON <span className='text-[#19345E]'>{post.date}</span> BY <span className='text-[#19345E]'>ROBIN CARTER</span> </p>
              </div>
              <div
                className="w-full h-auto object-cover mt-6"
                style={{
                  backgroundImage: `url(${post.imageUrl})`,
                  filter: 'brightness(80%)',
                }}
              >
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover opacity-0" />
              </div>
              <div className="mt-6 text-lg leading-relaxed blog-content font-poppins" dangerouslySetInnerHTML={{ __html: post.content }} />
              <CommentBox postId={post.id} />
            </div>
          </div>

          <div className="w-[32%] h-auto border-l-2 border-gray-300">
            <div class="max-w-md mx-auto bg-[#f4f4f4]  rounded-lg overflow-hidden px-6">
              <div class=" ">
                <h2 class="text-xl font-[800] text-[#0d0d0d]">Latest Blogs</h2>
              </div>
              <div class="py-2">
                <ul class="divide-y divide-gray-200">
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blog1})`, }}>
                        <div>
                        <div class="text-center">
                          <div class="text-sm">15</div>
                          <div class="text-sm">Mar</div>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Apartment purchases: use this guide to obtain the essential reports</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>

                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs2})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">12</div>
                        <div class="text-sm">Oct</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">How Much Does Conveyancing Cost?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs3})`, }}>                        
                        <div class="text-center absolute">
                        <div class="text-sm">01</div>
                        <div class="text-sm">Oct</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">When Do You Pay Conveyancing Fees?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs4})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">09</div>
                        <div class="text-sm">Jun</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Highly Recommended Sydney Conveyancing</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs5})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">08</div>
                        <div class="text-sm">May</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Leading Sydney Conveyancer</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">f0532d
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs6})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">10</div>
                        <div class="text-sm">Apr</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Why Should You Hire an Expert Conveyancer in Sydney</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs7})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">02</div>
                        <div class="text-sm">Mar</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Property Conveyancing Sydney – How to choose a conveyancer</a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
