import "./App.css";

const postsData = [
  {
    id: 1,
    profileImage: "/images/eden-avatar.png",
    username: "eden",
    postImage: "/images/wow.png",
    imageAlt: "홍익대학교 마스코트",
    likeCount: 44,
    caption: "프론트엔드 찍먹 중 👅"
  },
  {
    id: 2,
    profileImage: "/images/japan.jpeg",
    username: "tokyo",
    postImage: "/images/cityview.jpeg",
    imageAlt: "도시풍경",
    likeCount: 7613,
    caption: "도시풍경 🚀"
  },
  {
    id: 3,
    profileImage: "/images/eden-avatar.png",
    username: "explorer",
    postImage: "/images/night.jpeg", // public/images 폴더 안에 넣어둔 이미지 파일 이름
    imageAlt: "도시 풍경 이미지",
    likeCount: 1376,
    caption: "야경 🌆"
  }
];

// 프로필 헤더 컴포넌트
function Profile({ profileImage, username }) {
  return (
    <header className="post-profile">
      <img className="profile-image" src={profileImage} alt={`${username} 프로필`} />
      <strong className="profile-username">{username}</strong>
      <button className="more-button" type="button" aria-label="더 보기">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

// 개별 게시물 컴포넌트
function Post({ post }) {
  return (
    <article className="post">
      <Profile profileImage={post.profileImage} username={post.username} />

      <div className="post-image-area">
        <img className="post-image" src={post.postImage} alt={post.imageAlt} />
      </div>

      <div className="post-actions">
        <div className="left-actions">
          <button type="button" aria-label="좋아요">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>

          <button type="button" aria-label="댓글">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
            </svg>
          </button>

          <button type="button" aria-label="공유">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
            </svg>
          </button>
        </div>

        <button type="button" aria-label="저장">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 2h16v20l-8-6-8 6V2Z" />
          </svg>
        </button>
      </div>

      <section className="post-content">
        <p className="like-count">
          좋아요 <strong>{post.likeCount}</strong>개
        </p>

        <p className="caption">
          <strong>{post.username}</strong>
          <span>{post.caption}</span>
        </p>
      </section>
    </article>
  );
}

// 메인 앱 컴포넌트
function App() {
  return (
    <main className="page">
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default App;