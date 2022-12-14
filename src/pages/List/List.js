import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecommendList from './RecommendList';
import StoryList from './StoryList';
import S from './Styled.List';
import CATEGORY_LIST from './CategoryList.js';
import KakaoMap from './KakaoMap';
import { API } from '../../components/Config/Config';

const List = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const [moreList, setMoreList] = useState([]);
  const [user, setUser] = useState({
    title_or_hashtag: '',
    city: '',
    categories: '',
  });
  const data = Object.values(items);

  const lists = data[0];
  const [result, setResult] = useState([]);
  const recommendPostList = data[2];
  const totalPost = data[1];
  const { title_or_hashtag, city, categories } = user;
  const [offSet, setOffSet] = useState(0);
  const onIncrease = () => {
    setOffSet(offSet + 8);
  };
  useEffect(() => {
    fetch(`${API}/posts?title_or_hashtag=&city=&categories=
    `)
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=${8}`
    )
      .then(res => res.json())
      .then(result => {
        setMoreList(result.result);
      });
  }, []);

  const getItem = e => {
    e.preventDefault();
    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=0`
    )
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });

    setResult([]);
  };

  const moreItem = e => {
    e.preventDefault();
    const getMoreItem = () => {
      const copyResult = [...result];
      copyResult.push(moreList);
      setResult(copyResult.flat());
    };

    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=${
        4 + offSet
      }`
    )
      .then(res => res.json())
      .then(result => {
        onIncrease();
        setMoreList(result.result);
        getMoreItem();
      });
  };
  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setUser({ ...user, categories: categories.concat(item, ',') });
    } else if (!checked) {
      setUser({
        ...user,
        categories: categories.replace(`${item},`, ''),
      });
    }
  };

  const isData = items.length !== 0;

  if (!isData) {
    return (
      <S.Loading>
        <img src="/images/Loading.jpg" alt="????????????" />
        <div>Loading ?????? ????????????</div>
      </S.Loading>
    );
  } else
    return (
      <div>
        {items.length !== 0 && (
          <S.Inner>
            <S.Wrapper>
              <S.Header>
                <S.HeaderTitle>?????? ??????</S.HeaderTitle>
                <S.HeaderSubTitle>
                  ????????? ????????? ????????? ??????????????? ???????????????
                </S.HeaderSubTitle>
              </S.Header>
              <S.RightSide>
                <S.RightWrapper>
                  <S.LeftSide>
                    <KakaoMap data={data} />
                  </S.LeftSide>
                  <S.RightTitle>?????? ??????</S.RightTitle>
                  <S.RecommendPlace>
                    <RecommendList recommendPostList={recommendPostList} />
                  </S.RecommendPlace>
                  <S.SearchContainer>
                    <S.Region name="city" onChange={handleInput}>
                      <option value="">??????</option>
                      {COUNTY.map(item => (
                        <option key={item.id} value={item.county}>
                          {item.county}
                        </option>
                      ))}
                    </S.Region>
                    <S.SearchBox
                      type="search"
                      name="title_or_hashtag"
                      id="search-form"
                      placeholder="????????? ?????? ??????????????? ???????????????"
                      onChange={handleInput}
                    />
                  </S.SearchContainer>
                  <S.CheckBox>
                    {CATEGORY_LIST.map(item => {
                      return (
                        <S.CheckBoxTo key={item.id}>
                          <S.CheckBoxType
                            onChange={e => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                            type="checkbox"
                            value={item.data}
                            name="categories"
                            checked={categories.includes(item.data)}
                          />
                          {item.data}
                        </S.CheckBoxTo>
                      );
                    })}
                  </S.CheckBox>
                  <S.Button>
                    <S.SearchButton onClick={getItem}>??????</S.SearchButton>
                    <S.ResetButton>?????????</S.ResetButton>
                  </S.Button>
                  <S.WriteButton onClick={() => navigate(`/post/posting`)}>
                    <S.WriteLeft>?????? ???????????? ???????????? ???????????????</S.WriteLeft>
                    <S.WriteRight>????????????</S.WriteRight>
                  </S.WriteButton>
                </S.RightWrapper>
              </S.RightSide>
              <S.ListTitle>
                LIST <span style={{ color: 'green' }}>{totalPost}</span>
              </S.ListTitle>
              <S.StoryWrapper>
                {lists.map(item => (
                  <StoryList key={item.id} item={item} />
                ))}
                {totalPost >= lists.length &&
                  result.length !== 0 &&
                  result.map(item => <StoryList key={item.id} item={item} />)}
              </S.StoryWrapper>
              <S.LoadButton onClick={moreItem}>??? ??????</S.LoadButton>
              <S.Vacant />
            </S.Wrapper>
          </S.Inner>
        )}
      </div>
    );
};
export default List;

const COUNTY = [
  { id: 1, county: '??????' },
  { id: 2, county: '?????????' },
  { id: 3, county: '??????' },
  { id: 4, county: '??????' },
  { id: 5, county: '??????' },
  { id: 6, county: '??????' },
  { id: 7, county: '??????' },
  { id: 8, county: '??????' },
  { id: 9, county: '??????' },
  { id: 10, county: '??????' },
  { id: 11, county: '??????' },
  { id: 12, county: '??????' },
  { id: 13, county: '??????' },
  { id: 14, county: '??????' },
  { id: 15, county: '??????' },
  { id: 16, county: '??????' },
];
